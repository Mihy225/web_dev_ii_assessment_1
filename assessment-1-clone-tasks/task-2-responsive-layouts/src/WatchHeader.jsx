const genres = ['Action', 'Comedy', 'Romance', 'Drama'];

export function WatchHeader() {
  return (
    <header className="watch-header">
      <h1>watch.it</h1>
      <nav className="genre-bar" aria-label="Film genres">
        <ul>
          {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </nav>
      <button type="button" className="search-control">Search</button>
    </header>
  );
}
