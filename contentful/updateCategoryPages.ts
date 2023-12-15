require('dotenv').config({ path: '.env.local' })

const {
  createClient: createManagementClient,
} = require('contentful-management')
const { createClient: createDeliveryClient } = require('contentful')

const contentfulClient = createDeliveryClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const managementClient = createManagementClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN,
})

async function updateEntriesForTags() {
  try {
    const existingTags = await fetchExistingTags()
    const existingTokenCategories = await fetchExistingTokenCategories()

    // delete token categories not present in existingTags
    await Promise.all(
      existingTokenCategories.map(async (category) => {
        if (!existingTags.includes(category)) {
          await deleteTokenCategoryPage(category)
        }
      }),
    )

    // create or update entries for each existingTag
    await Promise.all(
      existingTags.map(async (tag) => {
        await createEntryForNewTag(tag)
      }),
    )

    console.log('contentful entries updated successfully.')
  } catch (error) {
    console.error('error updating contentful entries:', error.message)
  }
}

async function fetchExistingTags() {
  try {
    const space = await managementClient.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    )
    const environment = await space.getEnvironment('master')
    const contentType = await environment.getContentType('token')
    const tagsField = contentType.fields.find((field) => field.id === 'tags')
    const tags = tagsField.items.validations[0].in
    return tags
  } catch (error) {
    console.error(
      'error fetching existing tags from token model:',
      error.message,
    )
    return []
  }
}

async function fetchExistingTokenCategories() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'tokenCategory',
      select: 'fields.category',
    })

    // extract slugs from the entries
    const categories = entries.items.map((entry) => entry.fields.category)
    return categories
  } catch (error) {
    console.error('error fetching existing token categories:', error.message)
    return []
  }
}

function transformToSlug(value) {
  return value
    .toLowerCase() // convert to lowercase
    .replace(/[^a-zA-Z0-9\s]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // replace consecutive hyphens with a single hyphen
}

async function createEntryForNewTag(tag) {
  try {
    const slug = transformToSlug(tag)

    // fetch existing entry with the specified tag
    const entry = await contentfulClient.getEntries({
      content_type: 'tokenCategory',
      'fields.slug[in]': slug,
    })

    if (entry.total) {
      return
    }

    try {
      const space = await managementClient.getSpace(
        process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      )
      const environment = await space.getEnvironment('master')

      // create a new entry
      const entry = await environment.createEntry('tokenCategory', {
        fields: {
          category: { 'en-US': tag },
          slug: { 'en-US': slug },
        },
      })

      // publish the entry
      await entry.publish()

      console.log('entry created and published with ID:', entry.sys.id)
    } catch (error) {
      console.error('error creating and publishing entry:', error.message)
    }

    console.log(`entries updated for tag: ${tag}`)
  } catch (error) {
    console.error(`error updating entries for tag ${tag}:`, error.message)
  }
}

async function getEntryIdByCategory(category) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'tokenCategory',
      'fields.category[in]': category,
      select: 'sys.id',
      limit: 1,
    })

    if (entries.items.length > 0) {
      const entryId = entries.items[0].sys.id
      console.log('entry id found:', entryId)
      return entryId
    } else {
      console.log('no entry found for category:', category)
      return null
    }
  } catch (error) {
    console.error('error fetching entry id by category:', error.message)
    return null
  }
}

async function deleteTokenCategoryPage(category) {
  try {
    const entryId = await getEntryIdByCategory(category)
    const space = await managementClient.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    )
    const environment = await space.getEnvironment('master')

    const entry = await environment.getEntry(entryId)

    await entry.archive()
  } catch (error) {
    console.log(`error archiving ${category} page`)
  }
}

updateEntriesForTags()
