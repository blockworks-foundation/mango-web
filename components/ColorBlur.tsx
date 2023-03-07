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
      className={`absolute bg-th-red-dark mix-blend-screen rounded-full filter blur-3xl opacity-10 ${className}`}
      style={{ height: height, width: width }}
    />
  )
}

export default ColorBlur
