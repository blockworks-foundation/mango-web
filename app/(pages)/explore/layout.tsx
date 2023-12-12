export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-6 lg:px-20 pb-12 pt-8 max-w-[1280px] mx-auto">
      {children}
    </div>
  )
}
