// Add Express
const express = require("express");
const PORT = process.env.PORT || 4000

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("MD-Express-Server Running");
});

// health checkup call
app.get('/health', (_req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }
  res.status(200).send(data)
})

// Initialize server
app.listen(PORT, () => {
  console.log(`Sever Running on port ${PORT}.\nhttp://localhost:${PORT}`);
});

module.exports = app
