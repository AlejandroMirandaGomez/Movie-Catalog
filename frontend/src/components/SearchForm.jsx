function SearchForm({handleSearch, searchTerm, setSearchTerm}) {
  return (
    <form action="" onSubmit={handleSearch} className="mx-auto mb-8 flex gap-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="flex-3 p-3 max-w-lg border border-gray-500 rounded-lg focus:outline-none focus:ring-1 ring-gray-400 focus:border-transparent"
      />
      <button type="submit" className="p-3 flex-1 md:flex-none cursor-pointer hover:scale-105">
        Search
      </button>
    </form>
  )
}

export default SearchForm;
