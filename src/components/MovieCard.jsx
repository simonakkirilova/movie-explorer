import { useNavigate } from "react-router-dom";
import genreColors from "../utils/genreColors";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const genreColor = genreColors[movie.genre] || "secondary";

  return (
    <div
      className="card h-100 shadow-sm border-0"
      style={{ cursor: "pointer", transition: "transform 0.2s" }}
      onClick={() => navigate(`/movie/${movie.title}`)}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={movie.image}
        className="card-img-top"
        alt={movie.title}
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text mb-1"><strong>Year:</strong> {movie.year}</p>
        <span className={`badge bg-${genreColor}`}>{movie.genre}</span>
      </div>
    </div>
  );
}
