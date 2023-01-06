const GradientText = (props: any) => (
  <span className="bg-gradient-to-tl from-mango-red via-mango-orange to-mango-yellow bg-clip-text text-transparent">
    {props.children}
  </span>
);

export default GradientText;
