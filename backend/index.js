// backend/index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import todoRoutes from "./routes/todo.js";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// compute __dirname under ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// Standard middleware
app.use(cors());
app.use(express.json());

// Mount Swagger UI at /api-docs
const swaggerSpec = swaggerJsdoc({
  definition: { openapi: "3.0.0", info: { title: "ToDo API", version: "1.0.0" } },
  apis: ["./routes/*.js"]
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Serve front-end static files
const clientBuildPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(clientBuildPath));

// Catch-all for client-side routing
// Use a RegExp route to avoid un-named '*' in a string pattern
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Database & Server start
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/tododb";
console.log("🔍 Connecting to MongoDB at:", mongoUrl);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`🚀 Server running on http://localhost:${port}`)
    );
  })
  .catch(err => {
    console.error("❌ DB connection error:", err);
    process.exit(1);
  });
