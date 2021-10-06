'use strict';

// Create server
const express = require('express');
const server = express();

// Use server
server.get('/', (request, response) => {
  response.send('<h1>Hello. Great!</h1>');
});

// Set up port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
