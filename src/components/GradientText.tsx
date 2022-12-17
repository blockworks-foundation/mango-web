const GradientText = (props: any) => (
  <span className="bg-gradient-to-bl from-mango-green via-mango-yellow to-mango-red bg-clip-text text-transparent">
    {props.children}
  </span>
);

export default GradientText;
