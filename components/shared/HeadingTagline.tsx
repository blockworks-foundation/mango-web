const HeadingTagline = ({ text }: { text: string }) => {
  return (
    <div className="border-l-4 border-th-fgd-4 max-w-[204px]">
      <p className="text-xl ml-4">{text}</p>
    </div>
  )
}

export default HeadingTagline
