import { createRoot } from 'react-dom/client';
import { FilmCard } from './FilmCard.jsx';
import { WatchHeader } from './WatchHeader.jsx';
import { films } from './films.js';
import './styles.css';

function WatchPage() {
  return (
    <>
      <WatchHeader />
      <main className="film-list" aria-label="Film catalogue">
        {films.map(film => <FilmCard key={film.title} {...film} />)}
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<WatchPage />);
