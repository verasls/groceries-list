export default function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      <span className="btn-txt">{children}</span>
    </button>
  );
}
