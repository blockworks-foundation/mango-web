import Head from 'next/head'
import { Divider, Button, Layout, Space, Row, Col, Image } from 'antd';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const { Header, Footer, Sider, Content } = Layout;

const IndexPage = () => (
  <>
    <Head>
      <title>Mango Margin</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700" />
    </Head>
    <Layout>
      <Header style={{ marginTop: "1em" }}>
        <Navigation />
      </Header>
      <Layout>
        <Content style={{ padding: "2em" }}>
          <Row align="middle">
            <Col xs={24} lg={10}>
               <div style={{ padding: "2em" }}>
                  <p style={{ fontSize: 36 }}>
                    Decentralized, cross-margin trading up to 5x leverage with lightning speed and near-zero fees powered on Serum.
                  </p>
                  <Button type="primary" size="large">
                    Start Trading
                  </Button>
               </div>
            </Col>
            <Col xs={24} lg={14}>
             <div style={{ padding: "2em" }}>

              <img src="/previews/stats.png" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={8}>
               <div style={{ padding: "2em" }}>
                  <p style={{ fontSize: 36 }}>
                    Trade
                  </p>
                  <p>
                    Trade up to 5x margin, leveraged or short, with limit orders on Serum DEX’s fully on-chain order book as a maker or taker while earning interest on deposits and positions for extra profit. 
                  </p>
               </div>
            </Col>
            <Col xs={24} lg={8}>
             <div style={{ padding: "2em" }}>

              <p style={{ fontSize: 36 }}>
                Lend
              </p>
              <p style={{ width: 400 }}>
                Earn maximal interest on deposits, protect against inflation, and utilize idle investments. Always maintain custody of your funds.
              </p>
              </div>
            </Col>
            <Col xs={24} lg={8}>
               <div style={{ padding: "2em" }}>
                  <p style={{ fontSize: 36 }}>
                    Fees
                  </p>
                  <p>
                    No fees on interests. The only fees you will pay are for trading on Serum DEX. Stake your SRM into our pool to reduce the fees for everyone. Let's reach the MegaSerum fee tier together 🚀 
                  </p>
               </div>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>
        <Divider />
        <Row align="middle">
          <Logo />
          © 2021 Blockworks Foundation
        </Row>
      </Footer>
    </Layout>
  </>
)

export default IndexPage
