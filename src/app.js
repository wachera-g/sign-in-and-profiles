// Puts together routes, middleware, and settings to form the app

// Creates the app and defines a simple health check route.
import express from "express";

const app = express();

// A tiny route to prove the server is on.
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

export default app;
