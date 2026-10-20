import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import handler from './api/search.js';

export function searchApiPlugin() {
  return {
    name: 'local-search-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://localhost');
        if (url.pathname !== '/api/search') return next();
        req.query = Object.fromEntries([...new Set(url.searchParams.keys())].map((key) => {
          const values = url.searchParams.getAll(key);
          return [key, values.length === 1 ? values[0] : values];
        }));
        res.status = (code) => {
          res.statusCode = code;
          return res;
        };
        res.json = (body) => {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify(body));
          return res;
        };
        Promise.resolve(handler(req, res)).catch(() => {
          // Do not log exceptions: upstream URLs can contain the private key.
          if (!res.headersSent) res.status(500).json({ error: 'Local search handler failed.' });
          else res.end();
        });
      });
    },
  };
}

export default defineConfig(({ command, mode }) => {
  if (command === 'serve' && !process.env.SERPAPI_KEY) {
    const root = fileURLToPath(new URL('../', import.meta.url));
    const app = fileURLToPath(new URL('./', import.meta.url));
    // Load only the private server key. App-local files override root files;
    // an existing process environment value always wins. No VITE_ or define.
    const privateEnv = { ...loadEnv(mode, root, 'SERPAPI_'), ...loadEnv(mode, app, 'SERPAPI_') };
    if (privateEnv.SERPAPI_KEY) process.env.SERPAPI_KEY = privateEnv.SERPAPI_KEY;
  }
  return { plugins: [searchApiPlugin()] };
});
