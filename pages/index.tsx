import { Divider, Layout, Row, Col } from "antd";
import Head from "next/head";
import { CSSProperties } from "react";
import ContactIcons from "../components/ContactIcons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
// import StatsPanel from "../components/StatsPanel";

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
        href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400,500,600,700,800"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EVV22TP9JN"></script>
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
    <Layout
      style={{
        backgroundImage: "url(background.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-20px 0",
        maxWidth: 1575,
      }}
    >
      <Header style={{ background: "none", padding: 0, marginTop: "5%", marginLeft: "10%" }}>
        <Navigation />
      </Header>
      <Layout style={{ background: "none" }}>
        <Content className="mt-6">
          <Row align="middle" style={{ marginTop: "10%", marginLeft: "10%" }} className="mt-1">
            <Col>
              <div>
                <h1
                  style={{ fontSize: "calc(40px + 2.5vw);" }}
                  className="text-white leading-tight md:pr-7 font-black mb-1 hidden md:block"
                >
                  <div>Decentralized,</div>
                  <div className="">cross-margin trading</div>
                </h1>
                <h1 className="text-white leading-tight md:pr-7 font-black mb-1 text-4xl md:hidden">
                  <div>Decentralized,</div>
                  <div className="">cross-margin trading</div>
                </h1>
                <p className="pr-8 text-lg sm:text-2xl md:text-3xl lg:text-5xl font-normal sm:font-extralight mt-8 tracking-wide text-light-purple">
                  Up to 5x leverage · Lightning Speed · Near-zero fees
                </p>
                <div className="mt-16">
                  <button
                    className="rounded-lg py-2 px-10 text-lg md:text-2xl transform hover:scale-105 disabled:opacity-30  font-semibold"
                    style={
                      {
                        background: "linear-gradient(270deg, #afda06 34.47%, #fdca19 100%)",
                        "-webkit-font-smoothing": "antialiased",
                      } as ButtonStyle
                    }
                  >
                    <a href="/trade" className="text-primary-bg hover:text-primary-bg">
                      Start Trading
                    </a>
                  </button>
                  <button className="ml-6 rounded-lg py-1 px-10 text-lg md:text-2xl transform hover:scale-105 disabled:opacity-30 bg-primary-bg border-2 border-primary-green">
                    <a href="/trade" className="text-primary-green hover:text-primary-green">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            {/* <Col xs={24} lg={14}>
              <div className="hidden md:block">
                <StatsPanel />
              </div>
            </Col> */}
          </Row>
          <Row style={{ marginLeft: "10%" }} className="mt-10 sm:mt-32 pr-10 sm:pr-18 md:pr-24">
            <Col xs={24} lg={8}>
              <div className="mt-2 md:mr-6">
                <p className="text-2xl md:text-4xl">Trade</p>
                <p style={{ lineHeight: 2, fontSize: 16 }}>
                  Trade with up to 5x leverage, long or short, with limit orders on Serum DEX’s
                  fully on-chain order book as a maker or taker while earning interest on deposits
                  and margin positions.
                </p>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div className="mt-2 md:mr-6">
                <p className="text-2xl md:text-4xl">Lend</p>
                <p
                  style={{
                    lineHeight: 2,
                    fontSize: 16,
                  }}
                >
                  Earn maximal interest on deposits, protect against inflation, and utilize idle
                  investments. Always maintain custody of your funds.
                </p>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div className="mt-2 md:mr-6">
                <p className="text-2xl md:text-4xl">Fees</p>
                <p style={{ lineHeight: 2, fontSize: 16 }}>
                  No fees on interest. The only fees you will pay are for trading on Serum DEX.
                  Contribute your SRM into our pool to reduce the fees for everyone. Let's reach the
                  top Serum fee tier together 🚀
                </p>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <div className="pr-10 sm:pr-18 md:pr-24">
        <Footer style={{ background: "none", marginLeft: "10%", paddingLeft: 0, paddingRight: 0 }}>
          <Divider />
          <Row align="middle">
            <Col xs={24} lg={8}>
              <Logo />© 2021 Blockworks Foundation
            </Col>
            <Col xs={24} lg={8}></Col>
            <Col xs={24} lg={8}>
              <ContactIcons />
            </Col>
          </Row>
        </Footer>
      </div>
    </Layout>
  </>
);

export default IndexPage;
