import SearchForm from "../components/ui/SearchForm";
import MovieGrid from "../components/movies/MovieGrid";
import { useState, useEffect } from "react";

import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
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
    <div className="py-12">
      <div className="sm:pl-6">
        <SearchForm
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {error && (
        <p className="text-red-500 text-center md:text-left">{error}</p>
      )}

      {loading ? (
        <p className="text-center md:text-left">Loading movies...</p>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}

export default Home;
