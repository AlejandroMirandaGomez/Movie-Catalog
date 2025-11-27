import { useMovieContext } from "../contexts/MovieContext";

import MovieGrid from "../components/movies/MovieGrid";

function Favorites() {
  const { favoriteMovies } = useMovieContext();

  if (favoriteMovies.length > 0) {
    return (
      <div className="p-8 w-full">
        <h2 className="mb-4 text-2xl font-semibold text-center">Your Favorite Movies</h2>
        <MovieGrid movies={favoriteMovies} />
      </div>
    );
  } else {
    return (
      <div className="text-center mt-5">
        <h2 className="mb-4 text-2xl ">No Favorite Movies Yet</h2>
        <p>You haven't added any movies to your favorites list.</p>
      </div>
    );
  }
}

export default Favorites;
