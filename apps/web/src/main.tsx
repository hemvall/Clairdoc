import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main>
      <p className="eyebrow">CLAIRDOC · BASE DOCUMENTAIRE</p>
      <h1>Vos procédures, enfin faciles à retrouver.</h1>
      <p className="intro">Le socle technique de Clairdoc est prêt. L’interface de recherche sera disponible quand la recherche documentaire et l’authentification seront intégrées.</p>
      <section className="status" aria-labelledby="status-title">
        <h2 id="status-title">Prototype en préparation</h2>
        <p>Aucune question n’est envoyée ni réponse générée pour le moment.</p>
      </section>
      <p className="note">Espace documentaire interne · Accès réservé aux personnes autorisées</p>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
