"""Serve the Signal / Field site and optionally proxy NewsAPI requests."""

from __future__ import annotations

import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, urlencode, urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parent


def load_local_env() -> None:
    env_file = ROOT / ".env"
    if not env_file.is_file():
        return
    for line in env_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        name, value = line.split("=", 1)
        os.environ.setdefault(name.strip(), value.strip().strip("'\""))


class SiteHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if Path(parsed.path).name == ".env":
            self.send_error(404)
            return
        if parsed.path == "/api/health":
            self.send_json(200, {"ok": True, "apiConfigured": bool(os.environ.get("NEWSAPI_KEY"))})
            return
        if parsed.path == "/api/news":
            self.serve_news(parse_qs(parsed.query))
            return
        super().do_GET()

    def serve_news(self, params: dict[str, list[str]]) -> None:
        api_key = os.environ.get("NEWSAPI_KEY")
        if not api_key:
            self.send_json(503, {"status": "unavailable", "message": "NEWSAPI_KEY is not configured. Showing the clearly labeled demo edition."})
            return

        query = params.get("q", [""])[0].strip()
        category = params.get("category", [""])[0].strip()
        page = params.get("page", ["1"])[0]
        search_terms = query or "artificial intelligence OR machine learning OR technology"
        if category and category.lower() != "all":
            search_terms = f"({search_terms}) AND {category}"
        query_string = urlencode({
            "q": search_terms,
            "language": "en",
            "sortBy": "publishedAt",
            "pageSize": "20",
            "page": page,
        })
        request = Request(
            f"https://newsapi.org/v2/everything?{query_string}",
            headers={"X-Api-Key": api_key, "User-Agent": "SignalField/1.0"},
        )
        try:
            with urlopen(request, timeout=12) as response:
                payload = json.loads(response.read().decode("utf-8"))
            self.send_json(200, payload)
        except HTTPError as error:
            try:
                message = json.loads(error.read().decode("utf-8")).get("message", "News provider request failed.")
            except (json.JSONDecodeError, UnicodeDecodeError):
                message = "News provider request failed."
            self.send_json(error.code if error.code in (401, 429) else 502, {"status": "error", "message": message})
        except (URLError, TimeoutError, json.JSONDecodeError) as error:
            self.send_json(502, {"status": "error", "message": f"Unable to reach the news provider: {error}"})


def main() -> None:
    load_local_env()
    port = int(os.environ.get("PORT", "4173"))
    server = ThreadingHTTPServer(("127.0.0.1", port), SiteHandler)
    print(f"Signal / Field is running at http://127.0.0.1:{port}")
    print("NewsAPI: configured" if os.environ.get("NEWSAPI_KEY") else "NewsAPI: not configured; serving the demo edition")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping Signal / Field")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()