# Clairdoc

Workspace TypeScript pour le prototype documentaire Clairdoc : interface React/Vite, API Node.js et contrats partagÃ©s. Aucun fournisseur LLM nâ€™est requis pour dÃ©marrer le socle.

## PrÃ©requis

- Node.js 20 ou supÃ©rieur et npm
- Docker avec le plugin Compose pour PostgreSQL avec pgvector

## DÃ©marrage local

```sh
npm install
docker compose up -d db
cp .env.example .env
npm run dev
```

Vite sert lâ€™interface sur http://localhost:5173 et lâ€™API sur http://localhost:3001. La route `GET /health` renvoie `{"status":"ok"}`. Lâ€™API vÃ©rifie `PORT` et `DATABASE_URL` au dÃ©marrage. Les valeurs de `.env.example` et Compose sont rÃ©servÃ©es au dÃ©veloppement local ; gardez les secrets rÃ©els cÃ´tÃ© serveur.

## VÃ©rifications

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

`DATABASE_URL` doit utiliser le protocole `postgres://` ou `postgresql://`. Le fournisseur LLM et ses identifiants ne sont pas configurÃ©s dans ce socle.
