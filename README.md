# Signal / Field

A responsive AI and technology editorial site. The app runs on the Python standard library and modern browser APIs; no package installation or build step is required.

## Run locally

1. Install Python 3.10 or later.
2. From this directory, run `python server.py`.
3. Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

Set `PORT` to use a different local port.

## Optional live news

The included articles are illustrative editorial samples, not current events. To fetch real technology coverage, create a NewsAPI account, copy `.env.example` to `.env`, and set `NEWSAPI_KEY` to your key. Restart the server. The key stays server-side; the browser never receives it. NewsAPI plan limits and availability apply. Without a configured key, the app stays in clearly labeled demo mode.

## Features

- Home, latest, trending, category, article, search, bookmarks, about, and contact views, with hash-based routing.
- Search and category filters, pagination, responsive article cards, article sharing, and related reading.
- Persistent theme and bookmarks in browser local storage.
- Optional NewsAPI proxy and health endpoint, with explicit provider errors and demo fallback.
- Newsletter and contact forms provide honest local demo feedback; they do not send or store submissions.
- Keyboard skip link, semantic landmarks, focus indicators, reduced-motion support, page titles, and social metadata.

## Notes

Images are loaded from Unsplash. A network connection is needed for those remote images and for live NewsAPI requests. The static app can also be hosted behind any server that supports the `/api/health` and `/api/news` endpoints; keep API keys on the server.