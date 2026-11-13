export function FilmCard({ title, description, image, layout }) {
  return (
    <article className="film-card" data-layout={layout}>
      <img className="film-poster" src={image} alt={`${title} poster`} />
      <div className="film-information">
        <div className="film-copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button className="watch-control" type="button" aria-label={`Watch now: ${title}`}>
          <span>Watch</span>{' '}<span>Now</span>
        </button>
      </div>
    </article>
  );
}
