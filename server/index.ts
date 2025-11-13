import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Serve static files under /landing path
  app.use("/landing", express.static(staticPath));

  // Handle client-side routing - serve index.html for all /landing routes
  // This catches /landing, /landing/, /landing/register, etc.
  app.get("/landing*", (_req, res, next) => {
    // Check if request is for a static file (has extension)
    if (path.extname(_req.path)) {
      return next(); // Let static middleware handle it
    }
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Fallback for root path (redirect to /landing)
  app.get("/", (_req, res) => {
    res.redirect("/landing/");
  });

  const port = process.env.PORT || 3002;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
