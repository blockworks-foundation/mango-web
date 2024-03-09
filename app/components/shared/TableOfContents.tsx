'use client'
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { useEffect, useState } from 'react'

const TableOfContents = ({
  content,
}: {
  content: RichTextDocument | undefined
}) => {
  if (!content) return null
  const headingTwos = content.content
    .filter((node) => node.nodeType === 'heading-2')
    .map((h: any) => h.content[0].value)
  const [activeSection, setActiveSection] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = headingTwos.map((heading, index) => {
        const id = `anchor-link-${index}`
        const section = document.getElementById(id)
        if (section) {
          return {
            id: index + 1,
            offsetTop: section?.offsetTop,
            offsetBottom: section?.offsetTop + section?.offsetHeight,
          }
        }
      })

      const currentScroll = window.pageYOffset + window.innerHeight / 2

      const active = sectionOffsets.find((section) => {
        return section
          ? currentScroll >= section.offsetTop &&
              currentScroll <= section.offsetBottom
          : undefined
      })
      if (active?.id) {
        setActiveSection(active.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headingTwos])

  return (
    <div className="mt-8 p-6 rounded-lg bg-th-bkg-2 space-y-2 h-max md:sticky md:top-8 md:w-64">
      {headingTwos.map((heading, index) => (
        <a
          className={`block ${
            activeSection === index + 1 ? 'text-th-active' : 'text-th-fgd-2'
          }`}
          href={`#anchor-link-${index}`}
          key={heading}
          onClick={() => setActiveSection(index + 1)}
        >
          {heading}
        </a>
      ))}
    </div>
  )
}

export default TableOfContents
