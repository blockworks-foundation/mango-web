const GradientText = (props) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-bl from-mango-green via-mango-yellow to-mango-red">
    {props.children}
  </span>
)

export default GradientText
