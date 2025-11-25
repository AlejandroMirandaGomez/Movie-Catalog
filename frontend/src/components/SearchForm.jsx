function SearchForm({handleSearch, searchTerm, setSearchTerm}) {
  return (
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
  )
}

export default SearchForm;
