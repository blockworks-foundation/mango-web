export default function Logo() {
  return (
    <>
      <img
        height="40px"
        width="40px"
        src="/mango.png"
        className="inline-block"
      />
      <span
        style={{
          fontWeight: 700,
          marginRight: "1em",
          marginLeft: 8,
        }}
        className="hidden md:inline-block"
      >
        Mango Markets
      </span>
    </>
  );
}
