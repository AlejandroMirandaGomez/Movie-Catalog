import { useMovieContext } from "../../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function handleClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="group relative rounded-lg bg-background-dark overflow-hidden flex flex-col h-full max-w-sm hover:-translate-y-1 transition-transform duration-300 w-full">
      <div className="relative aspect-2/3 w-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="size-full object-cover"
        />
        <div className="absolute top-3 right-6 scale-250 opacity-0 hover:opacity-100 group-hover:opacity-100 duration-400">
          <button
            onClick={handleClick}
            className={
              "cursor-pointer self-center " +
              (favorite
                ? "text-red-600/90 hover:text-red-700/90"
                : "text-white/70 hover:text-white/90")
            }
          >
            ♥
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="font-semibold">{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
