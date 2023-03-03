import ButtonLink from './ButtonLink'
import ColorBlur from './ColorBlur'
import SectionWrapper from './SectionWrapper'

const ChildPageTopSection = ({
  heading,
  intro,
  buttonText,
  linkPath,
}: {
  heading: string
  intro: string
  buttonText: string
  linkPath: string
}) => {
  return (
    <div className="relative overflow-hidden">
      <SectionWrapper>
        <div className="w-full flex flex-col items-center mx-auto text-center max-w-[800px]">
          <h1 className="mb-6">{heading}</h1>
          <p className="intro-p">{intro}</p>
          <div className="mt-8">
            <ButtonLink path={linkPath} linkText={buttonText} size="large" />
          </div>
        </div>
      </SectionWrapper>
      <ColorBlur
        className="top-40 -right-80 bg-th-down animate-blob"
        height="100%"
        width="66%"
      />
      <ColorBlur
        className="top-80 left-40 delay-500 animate-blob"
        height="100%"
        width="50%"
      />
    </div>
  )
}

export default ChildPageTopSection
