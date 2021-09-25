export default function Card({ children, link, title }) {
  return (
    <div className="card" style={{ width: "18rem", height: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
