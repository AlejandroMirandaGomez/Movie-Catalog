function MovieCard({ movie }) {
  function handleClick() {
    alert("Clicked on movie:", movie.title);
  }

  let isFavorite = false;

  return (
    <div className="group relative rounded-lg bg-background-dark overflow-hidden flex flex-col h-full max-w-sm hover:-translate-y-1 transition-transform duration-300">
      <div className="relative aspect-2/3 w-full">
        <img
          src={movie.url}
          alt={movie.title}
          className="size-full object-cover"
        />
        <div className="absolute top-3 right-6 scale-250 opacity-0 hover:opacity-100 group-hover:opacity-100 duration-400">
          <button
            onClick={handleClick}
            className={
              "cursor-pointer self-center " +
              (isFavorite
                ? "text-red-600/90 hover:text-red-800/90"
                : "text-white/70 hover:text-white/90")
            }
          >
            ♥
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="font-semibold">{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
