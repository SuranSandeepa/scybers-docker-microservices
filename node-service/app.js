const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5000;

// Route to check Node.js is working
app.get("/", (req, res) => {
  res.send("Node.js Service is running!");
});

// Route to call Python Microservice
app.get("/python", async (req, res) => {
  try {
    const response = await axios.get("http://python-service:6000/");
    res.send(`Python Response: ${response.data}`);
  } catch (error) {
    res.status(500).send("Error connecting to Python service");
  }
});

app.listen(PORT, () => {
  console.log(`Node.js service running on port ${PORT}`);
});
