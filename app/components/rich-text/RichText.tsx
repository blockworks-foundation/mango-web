import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import TokenCallToAction from './TokenCallToAction'

type RichTextProps = {
  document: RichTextDocument | undefined
}

function RichText({ document }: RichTextProps) {
  if (!document) {
    return null
  }

  return <>{documentToReactComponents(document, options)}</>
}

export default RichText

const Bold = ({ children }) => <p className="font-bold">{children}</p>

const Text = ({ children }) => (
  <p className="mb-2 text-lg" style={{ lineHeight: '1.8rem' }}>
    {children}
  </p>
)

const H2 = ({ children }) => <h2 className="text-3xl">{children}</h2>
const H3 = ({ children }) => <h3 className="mb-2 text-xl">{children}</h3>
const H4 = ({ children }) => <h3 className="mb-1.5 text-lg">{children}</h3>
const Ul = ({ children }) => (
  <ul style={{ listStyle: 'inside disc', marginLeft: '16px' }}>{children}</ul>
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

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const isEntry = node.content.find(
        (type) => type.nodeType === 'embedded-entry-inline',
      )
      return isEntry ? <>{children}</> : <Text>{children}</Text>
    },
    [INLINES.HYPERLINK]: (node, children) => <A node={node}>{children}</A>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
    [BLOCKS.HR]: () => <Spacer />,
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === 'tokenCallToAction') {
        return (
          <div>
            <TokenCallToAction data={node.data.target.fields} />
          </div>
        )
      }
    },
  },
  // renderText: (text) => text.replace('!', '?'),
}
