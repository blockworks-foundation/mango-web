const GradientText = (props: any) => (
  <span className="animate-text bg-gradient-to-r from-mango-red via-mango-orange to-mango-green bg-clip-text text-transparent saturate-250">
    {props.children}
  </span>
);

export default GradientText;
