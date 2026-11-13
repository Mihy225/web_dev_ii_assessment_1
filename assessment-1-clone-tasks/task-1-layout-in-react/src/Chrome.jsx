import logo from '../assets/logo.svg';
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram-icon.svg';
import twitter from '../assets/twitter-icon.svg';

const pages = [
  ['Our Blog', '#blog'],
  ['Our Artists', 'https://www.erasedtapes.com/artists'],
  ['Our Story', 'https://www.erasedtapes.com/about'],
];

const profiles = [
  { name: 'Facebook', icon: facebook, url: 'https://www.facebook.com/erasedtapes/' },
  { name: 'Instagram', icon: instagram, url: 'https://www.instagram.com/erasedtapesrecords/' },
  { name: 'X (Twitter)', icon: twitter, url: 'https://x.com/ErasedTapes' },
];

function Navigation({ description }) {
  return (
    <nav aria-label={description}>
      <ul className="page-links">
        {pages.map(([label, destination]) => (
          <li key={label}><a href={destination}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export function ProfileLinks({ description }) {
  return (
    <ul className="profile-links" aria-label={description}>
      {profiles.map(({ name, icon, url }) => (
        <li key={name}>
          <a href={url}><img src={icon} width="50" height="50" alt={name} /></a>
        </li>
      ))}
    </ul>
  );
}

export function Masthead() {
  return (
    <header className="masthead">
      <img className="record-label" src={logo} alt="Erased Tapes Records" width="200" height="200" />
      <Navigation description="Main navigation" />
    </header>
  );
}

export function Footer({ copyright }) {
  return (
    <footer className="footer">
      <Navigation description="Footer navigation" />
      <p>{copyright}</p>
      <ProfileLinks description="Erased Tapes social profiles" />
    </footer>
  );
}
