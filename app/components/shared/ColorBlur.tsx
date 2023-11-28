import { useTheme } from 'next-themes'

const ColorBlur = ({
  className,
  height,
  width,
}: {
  className?: string
  height: string
  width: string
}) => {
  const { theme } = useTheme()
  return theme !== 'Light' ? (
    <div
      className={`absolute bg-th-fgd-1 mix-blend-overlay rounded-full filter blur-3xl ${className}`}
      style={{ height: height, width: width }}
    />
  ) : null
}

export default ColorBlur
