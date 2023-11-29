const ColorBlur = ({
  className,
  height,
  width,
}: {
  className?: string
  height: string
  width: string
}) => {
  return (
    <div
      className={`absolute bg-th-fgd-1 mix-blend-overlay rounded-full filter blur-3xl ${className}`}
      style={{ height: height, width: width }}
    />
  )
}

export default ColorBlur
