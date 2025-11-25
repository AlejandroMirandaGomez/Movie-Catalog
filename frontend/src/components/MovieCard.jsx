function MovieCard({ movie }) {
  
  function handleClick() {
    alert("Clicked on movie:", movie.title);
  }

  return (
    <div id="movie-card">
      <div id="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div id="movie-overlay">
          <button onClick={handleClick}>🤍</button>
        </div>
      </div>
      <div id="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;