'use client'
import { useEffect, useMemo, useState } from 'react'
import Select from '../forms/Select'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useParams, useRouter } from 'next/navigation'
import { TokenCategoryPage } from '../../../contentful/tokenCategoryPage'

const goToCategoryPage = (categorySlug: string, router: AppRouterInstance) => {
  router.push(`/explore/categories/${categorySlug}`)
}

const CategorySwitcher = ({
  categories,
}: {
  categories: TokenCategoryPage[]
}) => {
  const router = useRouter()
  const params = useParams()
  const { category } = params
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categoryNames = useMemo(() => {
    if (!categories?.length) return []
    const categoryNames: string[] = []
    for (const category of categories) {
      categoryNames.push(category.category)
    }
    return categoryNames.sort((a, b) => a.localeCompare(b))
  }, [categories])

  useEffect(() => {
    if (category && categories?.length) {
      const matchedCategory = categories.find((cat) => cat.slug === category)

      if (matchedCategory) {
        setSelectedCategory(matchedCategory.category)
      }
    }
  }, [categories, category])

  const handleSetCategory = (cat: string) => {
    setSelectedCategory(cat)
    if (cat === 'All') {
      router.push('/explore/categories', { shallow: true })
    } else {
      const slug = categories.find((category) => category.category === cat)
        ?.slug
      if (slug) {
        goToCategoryPage(slug, router)
      }
    }
  }

  return (
    <Select
      value={selectedCategory}
      onChange={(cat) => handleSetCategory(cat)}
      className="w-full sm:w-44 h-10 text-left whitespace-nowrap"
    >
      <>
        <Select.Option value="All">All</Select.Option>
        {categoryNames.map((cat) => (
          <Select.Option key={cat} value={cat}>
            {cat}
          </Select.Option>
        ))}
      </>
    </Select>
  )
}

export default CategorySwitcher
