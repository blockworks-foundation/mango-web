import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type RichTextProps = {
  document: RichTextDocument | null
}

function RichText({ document }: RichTextProps) {
  if (!document) {
    return null
  }

  return <>{documentToReactComponents(document, options)}</>
}

export default RichText

const Bold = ({ children }) => <p className="font-bold">{children}</p>

const Text = ({ children }) => <p className="mb-2">{children}</p>

const H3 = ({ children }) => <h3 className="mb-2 text-lg">{children}</h3>

const Spacer = () => (
  <hr style={{ borderColor: 'transparent', marginBottom: '12px' }} />
)

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HR]: () => <Spacer />,
  },
  // renderText: (text) => text.replace('!', '?'),
}
