const Search = ({ searchTerm, onSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
