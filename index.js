import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Node.js CI/CD Demo 🚀");
});

// Health check route (useful in CI/CD and Docker)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Example API route
app.get("/api/message", (req, res) => {
  res.json({ message: "CI/CD pipeline working successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
