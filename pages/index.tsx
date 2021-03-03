import { Divider, Button, Layout, Row, Col } from "antd";
import Head from "next/head";
import { CSSProperties } from "react";
import ContactIcons from "../components/ContactIcons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import StatsPanel from "../components/StatsPanel";

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
    <Layout
      style={{
        backgroundImage: "url(background.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-20px 0",
        maxWidth: 1575,
      }}
    >
      <Header style={{ background: "none", marginBottom: "0" }}>
        <Navigation />
      </Header>
      <Layout style={{ background: "none" }} className="p-6">
        <Content style={{ padding: "2em" }}>
          <Row align="middle">
            <Col xs={24} lg={10}>
              <div>
                <p className="text-2xl md:text-4xl md:leading-normal md:pr-7">
                  Decentralized, cross-margined 5x leveraged trading with
                  lightning speed and near-zero fees powered on Serum.
                </p>
                <Button
                  type="primary"
                  size="large"
                  disabled
                  className="mb-4"
                  style={
                    {
                      padding: "0px 60px 0px 60px",
                      fontWeight: 700,
                      background:
                        "linear-gradient(270deg, #AFD803AA 34.47%, #FECA1AAA 100%)",
                      "-webkit-font-smoothing": "antialiased",
                    } as ButtonStyle
                  }
                >
                  Coming Soon
                </Button>
              </div>
            </Col>
            <Col xs={24} lg={14}>
              <div>
                <StatsPanel />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={8}>
              <div className="mt-2 md:mr-6">
                <p style={{ fontSize: 36 }}>Trade</p>
                <p style={{ lineHeight: 2, fontSize: 16 }}>
                  Trade with up to 5x leverage, long or short, with limit orders
                  on Serum DEX’s fully on-chain order book as a maker or taker
                  while earning interest on deposits and margin positions.
                </p>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div className="mt-2 md:mr-6">
                <p style={{ fontSize: 36 }}>Lend</p>
                <p
                  style={{
                    lineHeight: 2,
                    fontSize: 16,
                  }}
                >
                  Earn maximal interest on deposits, protect against inflation,
                  and utilize idle investments. Always maintain custody of your
                  funds.
                </p>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div className="mt-2 md:mr-6">
                <p style={{ fontSize: 36 }}>Fees</p>
                <p style={{ lineHeight: 2, fontSize: 16 }}>
                  No fees on interest. The only fees you will pay are for
                  trading on Serum DEX. Contribute your SRM into our pool to
                  reduce the fees for everyone. Let's reach the top Serum fee
                  tier together 🚀
                </p>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer style={{ background: "none" }}>
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
    </Layout>
  </>
);

export default IndexPage;
