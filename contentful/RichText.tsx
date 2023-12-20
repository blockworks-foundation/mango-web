import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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
const H4 = ({ children }) => <h3 className="mb-1.5 text-base">{children}</h3>
const Ul = ({ children }) => (
  <ul style={{ listStyle: 'inside disc', marginLeft: '16px' }}>{children}</ul>
)

const Spacer = () => (
  <hr style={{ borderColor: 'transparent', marginBottom: '12px' }} />
)

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
    [BLOCKS.HR]: () => <Spacer />,
  },
  // renderText: (text) => text.replace('!', '?'),
}
