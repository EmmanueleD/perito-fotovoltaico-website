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

## Deploy statico su cPanel

Il deploy cPanel deve essere automatizzato da GitHub Actions: TinaCMS salva le
modifiche su GitHub, la pipeline genera un export statico fresco e carica solo
il contenuto di `out/` nella document root cPanel.

Flusso previsto:

```text
TinaCMS edit → commit su GitHub main → GitHub Actions → npm ci → export statico → upload cPanel
```

### Secrets GitHub richiesti

Configurare in GitHub → Settings → Secrets and variables → Actions:

```text
Variables non sensibili:

NEXT_PUBLIC_TINA_CLIENT_ID
TINA_BRANCH=main
NEXT_PUBLIC_SITE_URL=https://studiofulminis.it

CPANEL_PROTOCOL=sftp
CPANEL_HOST=hosting03.cesena.net
CPANEL_PORT=22
CPANEL_USER=studiofulminis
CPANEL_TARGET_DIR=/home/studiofulminis/public_html

Secrets sensibili:

TINA_TOKEN
CPANEL_SSH_PRIVATE_KEY
```

Non creare `GITHUB_BRANCH` nei Secrets/Variables di GitHub Actions: il prefisso
`GITHUB_` è riservato. Per TinaCMS in CI usare `TINA_BRANCH=main`; `GITHUB_BRANCH`
può restare solo in `.env.local` per compatibilità con setup locali già esistenti.

Se l'hosting non supporta SFTP/SSH, usare `CPANEL_PROTOCOL=ftp` o `ftps`,
`CPANEL_PORT=21` e configurare `CPANEL_PASSWORD` al posto della chiave SSH.
Se si usa un account FTP confinato direttamente nella document root del sito,
configurare `CPANEL_TARGET_DIR=/`.

### Guardrail importanti

- Non caricare manualmente la cartella locale `out/`: è ignorata da Git e può
  essere stale.
- Il workflow deve caricare solo i file generati dentro `out/`.
- `CPANEL_TARGET_DIR` deve puntare alla document root reale, attesa:
  `/home/studiofulminis/public_html`.
- Non caricare cartelle `__MACOSX`, file `.DS_Store` o sorgenti del progetto.
- Per rollback: rilanciare il workflow da un commit precedente o ripristinare
  un backup cPanel.

## Struttura Progetto

- `/src/app` - Pages e layout Next.js
- `/src/components` - Componenti React
- `/content` - Contenuti TinaCMS
- `/tina` - Configurazione TinaCMS
- `/public` - Assets statici
# Schema sync trigger
