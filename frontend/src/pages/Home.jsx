import MovieCard from "../components/MovieCard";
import SearchForm from "../components/SearchForm";
import { useState } from "react";

function Home({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // Implement search functionality here
  };

  return (
    <div className="py-8">
      <SearchForm
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div id="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
