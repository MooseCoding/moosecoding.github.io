import { createServer } from "http";
import { readFile } from "fs/promises";
import { createReadStream, existsSync, readFileSync, statSync } from "fs";
import { extname, join, normalize } from "path";
import { githubPagesBasePath } from "./github-pages-base-path.mjs";

const outDir = join(process.cwd(), "out");
const port = Number(process.env.PORT ?? 3000);

function detectBasePathFromBuild() {
  const indexPath = join(outDir, "index.html");
  if (!existsSync(indexPath)) return "";
  const html = readFileSync(indexPath, "utf8");
  const match = html.match(/href="(\/[^"/]+)\/_next\//);
  return match?.[1] ?? "";
}

const basePath = githubPagesBasePath() || detectBasePathFromBuild();

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function stripBasePath(urlPath) {
  if (!basePath) return urlPath;
  if (urlPath === basePath || urlPath === `${basePath}/`) return "/";
  if (urlPath.startsWith(`${basePath}/`)) {
    return urlPath.slice(basePath.length) || "/";
  }
  return urlPath;
}

function resolveFile(urlPath) {
  const stripped = stripBasePath(urlPath);
  const safePath = normalize(stripped).replace(/^(\.\.(\/|\\|$))+/, "");
  let filePath = join(outDir, safePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath) && !extname(filePath)) {
    const withHtml = `${filePath}.html`;
    if (existsSync(withHtml)) filePath = withHtml;
  }

  if (!existsSync(filePath) && stripped.endsWith("/")) {
    const indexPath = join(outDir, safePath, "index.html");
    if (existsSync(indexPath)) filePath = indexPath;
  }

  return filePath.startsWith(outDir) ? filePath : null;
}

createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(new URL(req.url ?? "/", `http://${req.headers.host}`).pathname);
    const filePath = resolveFile(urlPath);

    if (!filePath || !existsSync(filePath)) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = extname(filePath);
    res.writeHead(200, { "Content-Type": mime[ext] ?? "application/octet-stream" });

    if (ext === ".html") {
      res.end(await readFile(filePath));
      return;
    }

    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server error");
  }
}).listen(port, () => {
  console.log(`Preview: http://localhost:${port}/`);
  if (basePath) {
    console.log(`GitHub Pages base path: ${basePath} (asset URLs are rewritten for local preview)`);
  }
});
