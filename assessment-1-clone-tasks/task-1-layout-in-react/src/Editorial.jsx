import portrait from '../assets/profile_picture.jpg';
import articulation from '../assets/articulation.jpg';
import theCell from '../assets/the-cell.jpg';
import eulogy from '../assets/eulogy-for-evolution.jpg';
import blurred from '../assets/blurred.jpg';
import encores from '../assets/all-encores.jpg';
import { ProfileLinks } from './Chrome.jsx';
import { editorial } from './editorial.js';

const covers = [
  { title: 'Articulation', image: articulation },
  { title: 'Eulogy for Evolution', image: eulogy },
  { title: 'The Cell', image: theCell },
  { title: 'All Encores', image: encores },
  { title: 'Blurred', image: blurred },
];

function AlbumArtwork() {
  return (
    <figure className="album-artwork" aria-label="Selected Erased Tapes releases">
      {covers.map(({ title, image }) => (
        <img key={title} src={image} alt={`${title} album cover`} width="1440" height="1440" />
      ))}
    </figure>
  );
}

function Byline() {
  return (
    <section className="byline" aria-labelledby="author-heading">
      <div className="byline-copy">
        <h2 id="author-heading">The Author</h2>
        <p>{editorial.bio}</p>
      </div>
      <img className="portrait" src={portrait} width="200" height="200" alt="Portrait of the author" />
      <ProfileLinks description="Social links beside the author profile" />
    </section>
  );
}

export function FeatureArticle() {
  return (
    <article id="blog" aria-labelledby="article-title">
      <header className="article-lead">
        <h1 id="article-title">
          {editorial.name}: <span>{editorial.subtitle}</span>
        </h1>
        <p>{editorial.intro}</p>
      </header>
      <div className="article-copy">
        {editorial.sections.map(({ heading, paragraphs }) => (
          <section key={paragraphs[0]}>
            <h2>{heading}</h2>
            {paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>
      <AlbumArtwork />
      <Byline />
    </article>
  );
}

export function Discussion() {
  return (
    <section className="discussion" aria-labelledby="discussion-heading">
      <h2 id="discussion-heading">Comments</h2>
      <ul>
        {editorial.comments.map(({ username, text }) => (
          <li key={username}>
            <p><strong>{username}</strong></p>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
