import { FunctionComponent } from 'react'

interface ButtonLinkProps {
  path: string
  className?: string
  secondary?: boolean
  linkText: string
  size?: 'large' | 'medium' | 'small'
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  linkText,
  path,
  className,
  secondary,
  size = 'medium',
}) => {
  return (
    <a
      className={`flex w-max items-center justify-center rounded-md ${
        secondary
          ? 'border border-th-button md:hover:border-th-button-hover'
          : 'bg-th-button md:hover:bg-th-button-hover'
      } ${
        size === 'medium'
          ? 'h-10 px-4 text-sm'
          : size === 'large'
            ? 'h-12 px-6'
            : 'h-8 px-3'
      } default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
    >
      {linkText}
    </a>
  )
}

export default ButtonLink
