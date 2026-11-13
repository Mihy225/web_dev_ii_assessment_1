import { createRoot } from 'react-dom/client';
import { Masthead, Footer } from './Chrome.jsx';
import { FeatureArticle, Discussion } from './Editorial.jsx';
import { editorial } from './editorial.js';
import './styles.css';

function BlogPage() {
  return (
    <>
      <Masthead />
      <main className="paper">
        <FeatureArticle />
        <Discussion />
      </main>
      <Footer copyright={editorial.copyright} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<BlogPage />);
