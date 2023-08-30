export default function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      <div className="btn-text-container">
        <span className="btn-txt">{children}</span>
      </div>
    </button>
  );
}
