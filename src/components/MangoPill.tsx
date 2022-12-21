const MangoPill = (props: any) => (
  <div
    className="relative z-20 mb-4 inline-flex h-6 items-center rounded-full bg-gradient-to-br from-mango-red
 to-mango-orange p-2 transform translate-y-4"
  >
    <p className="text-xs font-bold uppercase tracking-widest text-white subpixel-antialiased">
      {props.children}
    </p>
  </div>
);

export default MangoPill;
