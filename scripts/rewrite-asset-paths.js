const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function getRelativePrefix(htmlPath) {
  const dir = path.dirname(htmlPath);
  const relative = path.relative(dir, outDir);
  if (relative === "" || relative === ".") return "./";
  return relative.split(path.sep).join("/") + "/";
}

function processFile(filePath) {
  const prefix = getRelativePrefix(filePath);
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(/href="\/_next\//g, `href="${prefix}_next/`);
  content = content.replace(/href="\/images\//g, `href="${prefix}images/`);
  content = content.replace(/src="\/_next\//g, `src="${prefix}_next/`);
  content = content.replace(/content="\/_next\//g, `content="${prefix}_next/`);
  const baseScript = `<script>window.__BASE__="${prefix.replace(/"/g, '\\"')}"</script>`;
  content = content.replace(/<head>/, `<head>${baseScript}`);
  fs.writeFileSync(filePath, content);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) processFile(full);
  }
}

if (!fs.existsSync(outDir)) {
  console.error("out directory not found. Run build first.");
  process.exit(1);
}
walk(outDir);
console.log("Rewrote asset paths for file:// and folder deployment.");
