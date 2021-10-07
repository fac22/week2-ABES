'use strict';
const layout = require('./layout.js');
const home = require('./routes/home');
const review = require('./routes/review');

// Create server
const express = require('express');
const server = express();

// example data

// ---------------------

// Use server
server.get('/', home.get);
server.get('/review', review.get);

// Set up port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
