const GradientText = (props) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango-red via-mango-yellow to-mango-green">
    {props.children}
  </span>
)

export default GradientText
