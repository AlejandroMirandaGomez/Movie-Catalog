import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // Implement search functionality here
  };

  return (
    <div>
      <form action="" onSubmit={handleSearch} id="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          id="search-input"
        />
        <button type="submit" id="search-button">
          Search
        </button>
      </form>

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
