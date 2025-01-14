const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Service</title>
        </head>
        <body>
            <h1>Welcome to Node.js Service</h1>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Node.js service running on http://localhost:${PORT}`);
});
