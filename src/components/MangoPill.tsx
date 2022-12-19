const MangoPill = (props: any) => (
  <div
    className="xs:-top-2 relative z-20 mb-4 inline-flex h-6 items-center rounded-full bg-gradient-to-br from-mango-red
 to-mango-orange p-2 sm:-top-3 md:-top-3 lg:-top-3"
  >
    <p className="text-xs font-bold uppercase tracking-widest text-white subpixel-antialiased">
      {props.children}
    </p>
  </div>
);

export default MangoPill;
