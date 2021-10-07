'use strict';

const home = require('./routes/home');
const review = require('./routes/review');

// Create server
const express = require('express');
const server = express();

const bodyParser = express.urlencoded({ extended: false });

// Use server
server.get('/', home.get);
server.get('/review', review.get);
server.post('/review', bodyParser, review.post);

// Static handler
const staticHandler = express.static('public');
server.use(staticHandler);

// Set up port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
