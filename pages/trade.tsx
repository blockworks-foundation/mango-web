import { Divider, Button, Layout, Row, Col } from "antd";
import next from "next";
import Head from "next/head";
import Image from "next/image";
import { CSSProperties } from "react";

const { Header, Footer, Content } = Layout;

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
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src="/mango.png"
            alt="Mango Markets"
            width={500}
            height={500}
          />
          <p
            style={{
              fontSize: 24,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -35%)",
            }}
          >
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  </>
);

export default IndexPage;
