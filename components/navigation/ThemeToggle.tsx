import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { IconButton } from '../shared/Button'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'Mango') {
      setTheme('Light')
    } else {
      setTheme('Mango')
    }
  }

  return (
    <IconButton hideBg size="medium" onClick={toggleTheme}>
      {theme === 'Mango' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </IconButton>
  )
}

export default ThemeToggle
