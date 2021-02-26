import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
    </Head>
    <header>
      <nav>
        <img src="/mango.svg" />
        <a href="/">Mango Markets</a>
        <a href="/trade">Trade</a>
        <a href="/stats">Stats</a>
        <a href="https://www.notion.so/Mango-Markets-8de7c02f243240769b917c6a500d8693">Help</a>
        <a href="https://medium.com/blockworks-foundation">Blog</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
