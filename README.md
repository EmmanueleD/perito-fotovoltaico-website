# Danilo Fulminis - Perito Fotovoltaico Website

Sito web professionale per Danilo Fulminis, perito industriale specializzato in sistemi fotovoltaici.

## Stack Tecnologico

- **Next.js 15.4.3** - Framework React
- **TinaCMS 2.8.1** - Content Management System
- **TailwindCSS** - Styling
- **TypeScript** - Type safety

## Sviluppo Locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) per vedere il sito.
TinaCMS admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Deploy su Vercel

Il sito è configurato per il deploy automatico su Vercel dal repository GitHub.

### Variabili d'Ambiente Richieste

Per il funzionamento di TinaCMS in produzione:

```
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
GITHUB_BRANCH=main
```

Configurare su Vercel Dashboard → Settings → Environment Variables

## TinaCMS Setup

1. Crea progetto su [app.tina.io](https://app.tina.io)
2. Collega repository: `EmmanueleD/perito-fotovoltaico-website`
3. Ottieni credenziali e configurale su Vercel
4. Redeploy

## Struttura Progetto

- `/src/app` - Pages e layout Next.js
- `/src/components` - Componenti React
- `/content` - Contenuti TinaCMS
- `/tina` - Configurazione TinaCMS
- `/public` - Assets statici
# Schema sync trigger
