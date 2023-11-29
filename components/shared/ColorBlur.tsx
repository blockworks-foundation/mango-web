import { useTheme } from 'next-themes'

const ColorBlur = ({
  blendMode,
  className,
  height,
  width,
}: {
  blendMode?: string
  className?: string
  height: string
  width: string
}) => {
  const { theme } = useTheme()
  return theme !== 'Light' ? (
    <div
      className={`absolute ${
        blendMode ? `mix-blend-${blendMode}` : 'mix-blend-overlay'
      } rounded-full filter blur-3xl ${className}`}
      style={{ height: height, width: width }}
    />
  ) : null
}

export default ColorBlur
