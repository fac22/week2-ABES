'use strict';
const layout = require('./layout.js');
const home = require('./routes/home');

// Create server
const express = require('express');
const server = express();

// Use server
server.get('/', home.get);

// Set up port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
