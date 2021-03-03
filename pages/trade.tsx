import { Layout } from "antd";
import Head from "next/head";
import { CSSProperties } from "react";

export interface ButtonStyle extends CSSProperties {
  "-webkit-font-smoothing": string;
}

const IndexPage = () => (
  <>
    <Head>
      <title>Mango Markets</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato:400,700"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EVV22TP9JN"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EVV22TP9JN', {
            page_path: window.location.pathname,
          });
      `,
        }}
      />
    </Head>
    <Layout />
    <div className="flex h-screen">
      <div className="relative m-auto">
        <img src="/mango.png" alt="Mango Markets" width={500} height={500} />
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl md:text-3xl mb-0 mt-16">Coming Soon</p>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
