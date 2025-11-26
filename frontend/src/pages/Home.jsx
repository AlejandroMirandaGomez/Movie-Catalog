import MovieCard from "../components/MovieCard";
import SearchForm from "../components/SearchForm";
import { useState, useEffect } from "react";

import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Inception",
  //     url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
  //     release_date: "2010",
  //   },
  //   {
  //     id: 2,
  //     title: "The Matrix",
  //     url: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
  //     release_date: "1999",
  //   },
  //   {
  //     id: 3,
  //     title: "Interstellar",
  //     url: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg",
  //     release_date: "2014-11-07",
  //   },
  //   // Add more movie objects as needed
  // ];

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (e) {
        console.error(e);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const results = await searchMovies(searchTerm);
      setMovies(results);
      setError(null);
    } catch (e) {
      console.error(e);
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8">
      <SearchForm
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {error && (
        <p className="text-red-500 text-center md:text-left">{error}</p>
      )}

      {loading ? (
        <p className="text-center md:text-left">Loading movies...</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 p-6 w-full place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
