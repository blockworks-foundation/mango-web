import { Document as RichTextDocument } from '@contentful/rich-text-types'
import RichText from '../../../../contentful/RichText'

const TokenAbout = ({ content }: { content: RichTextDocument | null }) => {
  return (
    <div className="max-w-4xl">
      <RichText document={content} />
    </div>
  )
}

export default TokenAbout
