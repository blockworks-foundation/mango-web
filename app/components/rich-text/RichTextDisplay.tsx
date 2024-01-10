import { Document as RichTextDocument } from '@contentful/rich-text-types'
import RichText from './RichText'

const RichTextDisplay = ({
  content,
  currentPrice,
}: {
  content: RichTextDocument | undefined
  currentPrice?: number
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <RichText document={content} currentPrice={currentPrice} />
    </div>
  )
}

export default RichTextDisplay
