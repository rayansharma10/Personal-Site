# Personal Notion

A simplified, offline-first personal knowledge management app.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the app:
```bash
npm start
```

3. Run in development mode (with DevTools):
```bash
npm run dev
```

## Project Structure

```
personal-notion/
├── src/
│   ├── main/              # Electron main process
│   │   └── main.js
│   ├── renderer/          # UI layer
│   │   ├── components/    # React components
│   │   ├── pages/         # Page views
│   │   ├── styles/        # CSS files
│   │   ├── index.html
│   │   └── app.js
│   └── shared/            # Shared utilities
│       └── dataStore.js   # Local data storage
├── data/                  # JSON data files
│   ├── pages.json
│   ├── tasks.json
│   ├── databases.json
│   └── calendar.json
└── public/                # Static assets
```

## Features

- 📄 Pages - Hierarchical note-taking
- ✓ Tasks - Task management and tracking
- 📅 Calendar - Time-based organization
- 🗂️ Databases - Structured data storage
