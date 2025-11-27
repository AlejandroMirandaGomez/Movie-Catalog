import MovieCard from "./MovieCard";

export function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 w-full place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieGrid;
