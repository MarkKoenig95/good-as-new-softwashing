export default function Card({ buttonText, children, link, title }) {
  return (
    <div className="card p-4 row" style={{ width: "22rem", height: "22rem" }}>
      <div className="card-body justify-content-between">
        <h3 className="card-title fw-bold">{title}</h3>
        <div className="card-text">{children}</div>
        <a href={link} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
