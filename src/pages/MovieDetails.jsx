import { useParams, useNavigate } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import genreColors from "../utils/genreColors";


export default function MovieDetails() {
  const { title } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useMovies();

  if (isLoading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  const movie = data?.find((m) => m.title === title);
  const genreColor = genreColors[movie.genre] || "secondary";

  if (!movie) {
    return <p className="text-center mt-5">Movie not found</p>;
  }

  return (
    <div className="container mt-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back to movies
      </button>

      <div className="card shadow-sm">
        <img
          src={movie.image}
          alt={movie.title}
          className="card-img-top img-fluid"
          style={{ maxHeight: "450px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h2 className="card-title mb-3">{movie.title}</h2>

          <div className="mb-3">
            <span className="badge bg-secondary me-2">{movie.year}</span>
            <span className={`badge bg-${genreColor}`}>{movie.genre}</span>
          </div>

          <p className="card-text">
            <strong>Plot:</strong> {movie.plot}
          </p>
        </div>
      </div>
    </div>
  );
}
