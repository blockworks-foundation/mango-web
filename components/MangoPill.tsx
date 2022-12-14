const MangoPill = (props: any) => {
  return (
    <div
      className="inline-flex items-center relative h-6 mb-4 px-4 py-4 bg-gradient-to-br from-mango-red to-yellow-500
     rounded-full lg:-top-3 md:-top-3 sm:-top-3 xs:-top-2 z-20"
    >
      <p className="text-white text-xs uppercase font-bold tracking-widest subpixel-antialiased">
        {props.children}
      </p>
    </div>
  )
}

export default MangoPill
