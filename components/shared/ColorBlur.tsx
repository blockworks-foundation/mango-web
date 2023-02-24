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
      className={`absolute bg-th-button mix-blend-screen rounded-full filter blur-3xl opacity-10 ${className}`}
      style={{ height: height, width: width }}
    />
  ) : null
}

export default ColorBlur
