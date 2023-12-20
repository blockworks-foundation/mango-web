import { Document as RichTextDocument } from '@contentful/rich-text-types'
import RichText from '../../../contentful/RichText'

const RichTextDisplay = ({
  content,
}: {
  content: RichTextDocument | undefined
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <RichText document={content} />
    </div>
  )
}

export default RichTextDisplay
