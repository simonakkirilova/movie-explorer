import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

export default function Movies() {
  const { data, isLoading, error } = useMovies();

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center mt-5">Error fetching movies</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Movies</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((movie) => (
          <div key={movie.title} className="col">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
