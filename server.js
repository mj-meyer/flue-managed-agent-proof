import http from "node:http";
import { readFile } from "node:fs/promises";

const PORT = Number(process.env.PORT) || 4173;
const HOST = "0.0.0.0";

const server = http.createServer(async (req, res) => {
  const path = new URL(req.url, `http://${req.headers.host ?? "localhost"}`).pathname;

  if (path === "/" && (req.method === "GET" || req.method === "HEAD")) {
    try {
      const body = await readFile(new URL("./index.html", import.meta.url));
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Length": body.length,
      });
      res.end(req.method === "HEAD" ? undefined : body);
      return;
    } catch {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
