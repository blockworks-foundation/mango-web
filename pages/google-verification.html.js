export default class extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader('Content-Type', 'text/html')
    res.write(
      '<html><body>google-site-verification: google1c604c9025f210a7.html</body></html>'
    )
    res.end()
  }
}
