'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchNewsArticles } from '../../../contentful/newsArticle'
import { ARTICLE_LIMIT } from '../../utils/constants'
import NewsArticleCard from './NewsArticleCard'
import { useMemo } from 'react'

const fetchNewArticles = async (category, skip): Promise<Array<any>> => {
  const newArticles = await fetchNewsArticles({
    preview: false,
    category: category,
    limit: ARTICLE_LIMIT,
    skip: skip,
  })

  return newArticles ?? []
}

const MoreArticles = ({ category }: { category: string }) => {
  const { data: nextArticles, fetchNextPage: fetchNextArticles } =
    useInfiniteQuery({
      queryKey: ['next-articles', category],
      initialPageParam: 0,
      queryFn: ({ pageParam }) => fetchNewArticles(category, pageParam),
      getNextPageParam: (lastPage, allPages) => allPages.length * ARTICLE_LIMIT,
    })

  const handleLoadMore = () => {
    fetchNextArticles()
  }

  const newArticles = useMemo(() => {
    const articles = nextArticles?.pages.slice(1)
    return articles?.flat()
  }, [nextArticles])

  const showLoadMore = useMemo(() => {
    const lastArticles = nextArticles?.pages?.[nextArticles?.pages?.length - 1]
    if (lastArticles?.length === ARTICLE_LIMIT || !lastArticles) return true
    return false
  }, [nextArticles])

  return (
    <>
      {newArticles?.length
        ? newArticles.map((article) => (
            <NewsArticleCard article={article} key={article.articleUrl} />
          ))
        : null}
      <div className="mt-4 col-span-3 flex justify-center">
        {showLoadMore ? (
          <button
            className="text-th-fgd-2 md:hover:text-th-fgd-4 font-bold"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        ) : (
          <p className="text-sm">No news to show...</p>
        )}
      </div>
    </>
  )
}

export default MoreArticles
