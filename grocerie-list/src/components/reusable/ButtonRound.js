export default function ButtonRound({ size, onClick, children }) {
  return (
    <button
      className="btn-round"
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <span className="btn-txt">{children}</span>
    </button>
  );
}
