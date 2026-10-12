# Clairdoc

Workspace TypeScript pour le prototype documentaire Clairdoc : interface React/Vite, API Node.js et contrats partagés. Aucun fournisseur LLM n’est requis pour démarrer le socle.

## Prérequis

- Node.js 20 ou supérieur et npm
- Docker avec le plugin Compose pour PostgreSQL avec pgvector (facultatif, différé pour cette étape)

## Démarrage local

```sh
npm install
npm run dev
```

Pour activer ultérieurement PostgreSQL avec pgvector, copiez `.env.example` vers `.env` et lancez `docker compose up -d db`. Docker et PostgreSQL/pgvector ne sont pas requis pour démarrer et vérifier le socle applicatif.

Vite sert l’interface sur http://localhost:5173 et l’API sur http://localhost:3001. La route `GET /health` renvoie `{"status":"ok"}`. L’API vérifie `PORT` et `DATABASE_URL` au démarrage. Les valeurs de `.env.example` et Compose sont réservées au développement local ; gardez les secrets réels côté serveur.

## Vérifications

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

La configuration serveur utilise des valeurs fictives par défaut pour le démarrage local. Lorsqu’elle est fournie, `DATABASE_URL` doit utiliser le protocole `postgres://` ou `postgresql://`. Le fournisseur LLM et ses identifiants ne sont pas configurés dans ce socle.
