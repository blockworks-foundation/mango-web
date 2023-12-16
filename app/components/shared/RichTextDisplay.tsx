import { Document as RichTextDocument } from '@contentful/rich-text-types'
import RichText from '../../../contentful/RichText'

const RichTextDisplay = ({
  content,
}: {
  content: RichTextDocument | undefined
}) => {
  return (
    <div className="max-w-4xl">
      <RichText document={content} />
    </div>
  )
}

export default RichTextDisplay
