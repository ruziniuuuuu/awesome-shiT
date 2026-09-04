import { createReadStream, existsSync, statSync } from "node:fs"
import { createServer } from "node:http"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const publicDir = path.join(root, "public")
const host = process.env.HOST ?? "0.0.0.0"
const port = Number(process.env.PORT ?? 8090)
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
}

if (!existsSync(path.join(publicDir, "index.html"))) {
  throw new Error("请先运行 npm run build")
}

createServer((request, response) => {
  const url = new URL(request.url, `http://localhost:${port}`)
  const requested = decodeURIComponent(url.pathname).replace(/^\/+/, "")
  let target = path.resolve(publicDir, requested || "index.html")
  if (!target.startsWith(publicDir)) {
    response.writeHead(403).end("Forbidden")
    return
  }
  if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, "index.html")
  if (!existsSync(target)) {
    response.writeHead(404).end("Not found")
    return
  }
  response.writeHead(200, { "Content-Type": types[path.extname(target)] ?? "application/octet-stream" })
  createReadStream(target).pipe(response)
}).listen(port, host, () =>
  console.log(`Archive available at http://${host}:${port}`),
)
