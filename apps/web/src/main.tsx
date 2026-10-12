import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main>
      <p className="eyebrow">CLAIRDOC · BASE DOCUMENTAIRE</p>
      <h1>Vos procédures, enfin faciles à retrouver.</h1>
      <p className="intro">Posez une question sur les règles commerciales de l’agence. Clairdoc répond à partir des documents autorisés et indique ses sources.</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="question">Votre question</label>
        <textarea id="question" placeholder="Ex. Quelle remise puis-je proposer sans validation ?" rows={3} />
        <button type="submit">Rechercher dans les procédures <span aria-hidden="true">→</span></button>
      </form>
      <p className="note">Prototype documentaire · Connectez-vous pour accéder à votre espace</p>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
