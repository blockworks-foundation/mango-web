interface LandingPageButtonProps {
  path: string
  className?: string
  linkText: string
}

const LandingPageButton = ({
  linkText,
  path,
  className,
}: LandingPageButtonProps) => {
  return (
    <a
      className={`flex w-max items-center justify-center rounded-xl bg-th-button md:hover:bg-th-button-hover h-16 px-6 default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
    >
      <span className="font-display text-xl">{linkText}</span>
    </a>
  )
}

export default LandingPageButton
