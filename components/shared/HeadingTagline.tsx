const HeadingTagline = ({ text }: { text: string }) => {
  return (
    <div className="border-l-4 border-th-fgd-4 max-w-[220px] lg:max-w-[320px]">
      <p className="lg:text-xl ml-4">{text}</p>
    </div>
  )
}

export default HeadingTagline
