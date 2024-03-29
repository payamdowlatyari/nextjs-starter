export default function Logo({ light, size }: any) {
  return (
    <a href="/">
      {light ? (
        <img
          src="newlogo-light1-removebg.webp"
          alt="logo"
          width={size}
          height={size}
        />
      ) : (
        <img src="newlogo-light2-removebg.webp" alt="logo" />
      )}
    </a>
  );
}
