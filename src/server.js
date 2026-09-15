import http from 'node:http';

const PORT = Number(process.env.PORT || 4173);
const HOST = '0.0.0.0';

export function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname !== '/') {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Not Found');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<!doctype html><html><body><h1>Managed UI verified</h1></body></html>');
  });
}

export function start() {
  const server = createServer();
  server.listen(PORT, HOST, () => {
    console.log(`listening on http://${HOST}:${PORT}`);
  });
  return server;
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  start();
}
