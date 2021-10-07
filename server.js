'use strict';
const layout = require("./layout.js")

// Create server
const express = require('express');
const server = express();

// Use server
server.get('/', (request, response) => {
  response.send(layout("Home", "<h1>It works!</h1>"));
});

// Set up port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
