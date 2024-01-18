import dayjs from 'dayjs'
import { NewsArticle } from '../../../contentful/newsArticle'

const NewsArticleCard = ({ article }: { article: NewsArticle }) => {
  const { title, articleUrl, imageUrl, sourceSiteName, datePublished } = article
  return (
    <a
      className="col-span-3 md:col-span-1 md:hover:opacity-80"
      href={articleUrl}
      key={articleUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="w-full h-[124px] overflow-hidden flex items-center">
        <img src={imageUrl} className="w-48 h-auto" />
      </div>
      <h4 className="mt-4">{title}</h4>
      <p className="mt-2 text-sm text-th-fgd-2">{sourceSiteName}</p>
      <p className="text-sm">{dayjs(datePublished).format('D MMM YYYY')}</p>
    </a>
  )
}

export default NewsArticleCard
