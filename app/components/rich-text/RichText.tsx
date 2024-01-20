import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import TokenCallToAction from './TokenCallToAction'
import { formatNumericValue } from '../../utils/numbers'

type RichTextProps = {
  document: RichTextDocument | undefined
  currentPrice?: number
}

function renderImage(node) {
  const { file, title } = node.data.target.fields
  const imageUrl = `https:${file.url}`

  return <img className="w-full h-auto my-8" src={imageUrl} alt={title} />
}

function RichText({ document, currentPrice }: RichTextProps) {
  if (!document) {
    return null
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const isEntry = node.content.find(
          (type) => type.nodeType === 'embedded-entry-inline',
        )
        const isInlineText = isEntry && node.nodeType === 'paragraph'
        return isEntry && !isInlineText ? (
          <>{children}</>
        ) : (
          <Text>{children}</Text>
        )
      },
      [INLINES.HYPERLINK]: (node, children) => {
        if (node.data.uri.includes('youtube.com')) {
          // Extract videoId from the URL
          const match =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
              node.data.uri,
            )
          const videoId = match && match[7].length === 11 ? match[7] : null
          return (
            videoId && (
              <span className="relative block w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  title={`https://youtube.com/embed/${videoId}`}
                  src={`https://youtube.com/embed/${videoId}`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  allowFullScreen
                />
              </span>
            )
          )
        } else {
          return <A node={node}>{children}</A>
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => renderImage(node),
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
      [BLOCKS.LIST_ITEM]: (node) => {
        const transformedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.LIST_ITEM]: (node, children) => children,
          },
        })
        return (
          <li className="font-body text-th-fgd-4 text-lg mb-4 tracking-wider">
            {transformedChildren}
          </li>
        )
      },
      [BLOCKS.HR]: () => <Spacer />,
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === 'tokenCallToAction') {
          return <TokenCallToAction data={node.data.target.fields} />
        }
        if (node.data.target.sys.contentType.sys.id === 'inlineTextPrice') {
          const priceType = node.data.target.fields.priceType
          if (priceType === 'Current price') {
            return (
              <span className="text-th-fgd-2 font-bold text-lg">
                {currentPrice ? `$${formatNumericValue(currentPrice)}` : '–'}
              </span>
            )
          }
        }
      },
      [BLOCKS.QUOTE]: (node) => {
        const transformedChildren = documentToReactComponents(node, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => children,
            [BLOCKS.QUOTE]: (node, children) => children,
          },
        })
        return (
          <blockquote className="text-sm italic -mt-4 mb-8 text-right font-body text-th-fgd-4 tracking-wider">
            {transformedChildren}
          </blockquote>
        )
      },
    },
  }

  return <>{documentToReactComponents(document, options)}</>
}

export default RichText

const Bold = ({ children }) => (
  <span className="font-bold text-th-fgd-3">{children}</span>
)

const Text = ({ children }) => (
  <p className="mb-4 text-lg text-th-fgd-3" style={{ lineHeight: '1.8rem' }}>
    {children}
  </p>
)

const H2 = ({ children }) => <h2 className="text-3xl">{children}</h2>
const H3 = ({ children }) => <h3 className="mb-2 text-xl">{children}</h3>
const H4 = ({ children }) => <h3 className="mb-1.5 text-lg">{children}</h3>
const Ul = ({ children }) => (
  <ul style={{ listStyle: 'outside disc', marginLeft: '16px' }}>{children}</ul>
)
const mangoUrl = 'https://mango.markets'
const A = ({ node, children }) => {
  const { data } = node
  const isInternal =
    data.uri.includes(mangoUrl) ||
    data.uri.includes('localhost') ||
    !data.uri.includes('http')
  return (
    <Link
      className="text-th-fgd-3 border-b border-th-active md:hover:border-transparent text-lg"
      href={data.uri}
      target={isInternal ? '_self' : '_blank'}
      rel={isInternal ? '' : 'noopener noreferrer'}
    >
      {children}
    </Link>
  )
}

const Spacer = () => (
  <hr style={{ borderColor: 'transparent', marginBottom: '12px' }} />
)
