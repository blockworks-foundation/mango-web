const HeadingTagline = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center space-x-4 max-w-[204px]">
      <div className="border-2 border-th-fgd-4 h-full py-2" />
      <p className="text-lg">{text}</p>
    </div>
  )
}

export default HeadingTagline
