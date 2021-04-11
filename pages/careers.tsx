import { Divider, Layout, Row, Col } from "antd";
import Head from "next/head";
import { CSSProperties } from "react";
import ContactIcons from "../components/ContactIcons";
import Logo from "../components/Logo";
import { Navigation } from "../components/Navigation";

const { Header, Footer, Content } = Layout;

export interface ButtonStyle extends CSSProperties {
  "-webkit-font-smoothing": string;
}

const CareersPage = () => (
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
          <Row align="middle" className="mt-2 sm:mt-16 text-center" wrap={false}>
            <div className="mx-auto">
              <div className="text-2xl sm:text-7xl font-bold">Join Team Mango</div>
              <div className="mt-8 text-sm px-6 sm:text-lg">
                We are looking for full-time contributors to join our core team.
              </div>
              <div className="text-sm sm:text-lg mt-2 px-6">
                Please contact us
                <a href="https://discord.gg/67jySBhxrg"> on Discord </a> or email us at{" "}
                <a href="mailto:hello@blockworks.foundation">hello@blockworks.foundation</a> if you
                are interested.
              </div>
              <div className="flex-shrink text-md sm:text-lg sm:font-bold mt-6 px-2 py-2 bg-primary-light mx-6">
                Read our{" "}
                <a
                  href="https://docs.mango.markets/litepaper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Litepaper
                </a>{" "}
                to learn more about the Mango vision.
              </div>
            </div>
          </Row>
          <Row align="middle" className="mt-4 sm:mt-6 px-6" wrap={false}>
            <div className="mx-auto bg-primary-light px-10">
              <div className="divide-solid divide-y divide-primary-lighter">
                <div className="flex flex-col py-8">
                  <div className="flex justify-between font-bold  text-xl sm:text-2xl mb-4">
                    <div>Full Stack Developer</div>
                    <div className="text-lg">Remote</div>
                  </div>
                  <div className="flex flex-col space-y-4 pl-2 sm:pl-5 text-base">
                    <div>1. Experience with crypto trading platforms</div>
                    <div>
                      2. Experience with writing and using open source libraries in Typescript /
                      Javascript
                    </div>
                    <div>
                      3. Proven ability to optimize code quality and performance of complex React
                      applications
                    </div>
                    <div>4. Understanding of responsive css frameworks. We use Tailwind CSS.</div>
                    <div>
                      5. Exceptional speed implementing features across the stack including backend
                      micro-services serving WebSockets and Rest APIs
                    </div>
                    <div>
                      6. Excited to offer a centralized exchange feel on top of a fully
                      decentralized platform
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 py-8">
                  <div className="flex justify-between font-bold text-xl sm:text-2xl mb-4">
                    <div>Blockchain Developer</div>
                    <div className="text-lg">Remote</div>
                  </div>
                  <div className="flex flex-col space-y-4 pl-2 sm:pl-5 text-base">
                    <div>1. Experienced user of crypto trading platforms</div>
                    <div>
                      2. Proven ability to create readable and tested programs in Rust or other
                      statically typed languages
                    </div>
                    <div>
                      3. Excited to create a fully decentralized bitmex alternative by bringing the
                      main drivers of centralized exchange revenue into DeFi
                    </div>
                    <div>
                      4. Understanding of different DeFi concepts and recent attacks against them
                      (AMMs and flash loans)
                    </div>
                    <div>
                      5. Exceptional attention to detail and creativity in reasoning about security
                      concerns in dynamic market conditions
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default CareersPage;
