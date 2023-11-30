export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="px-20 py-12">{children}</div>
}
