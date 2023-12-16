'use client'

import { useEffect, useMemo, useState } from 'react'
import Select from '../forms/Select'
import { TokenPageWithData } from '../../../contentful/tokenPage'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useParams, useRouter } from 'next/navigation'
import { tagToSlug } from './TokenTable'

const goToCategoryPage = (categorySlug: string, router: AppRouterInstance) => {
  router.push(`/explore/${categorySlug}`)
}

const CategorySwitcher = ({ tokens }: { tokens: TokenPageWithData[] }) => {
  const router = useRouter()
  const params = useParams()
  const { category } = params
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    if (!tokens?.length) return []
    const categories: string[] = []
    for (const token of tokens) {
      for (const tag of token.tags) {
        if (!categories.includes(tag)) {
          categories.push(tag)
        }
      }
    }
    return categories.sort((a, b) => a.localeCompare(b))
  }, [tokens])

  useEffect(() => {
    if (category && categories.length) {
      const categoryParts = category.toString().toLowerCase().split('-')

      const matchedCategory = categories.find((cat) => {
        const catLower = cat.toLowerCase()
        return categoryParts.every((part) => catLower.includes(part))
      })

      if (matchedCategory) {
        setSelectedCategory(matchedCategory)
      }
    }
  }, [categories, category])

  const handleSetCategory = (cat: string) => {
    setSelectedCategory(cat)
    if (cat === 'All') {
      router.push('/explore', { shallow: true })
    } else {
      const slug = tagToSlug(cat)
      goToCategoryPage(slug, router)
    }
  }

  return (
    <Select
      value={selectedCategory}
      onChange={(cat) => handleSetCategory(cat)}
      className="w-1/2 lg:w-44 h-10 text-left whitespace-nowrap"
    >
      <>
        <Select.Option value="All">All</Select.Option>
        {categories.map((cat) => (
          <Select.Option key={cat} value={cat}>
            {cat}
          </Select.Option>
        ))}
      </>
    </Select>
  )
}

export default CategorySwitcher
