export default function CopyRight() {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "12px",
        alignSelf: "flex-end",
        padding: "30px 0",
      }}
    >
      <a
        className="underlined underlinedThin"
        href="https://www.payamd.com"
        target="_blank"
        rel="noreferrer"
      >
        payamd.com
      </a>
      {" © "}
      {new Date().getFullYear()}
      {" | "}
      All Rights Reserved.
    </div>
  );
}
