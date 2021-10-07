'use strict';

const db = require('./connection.js');

function getReviews() {
  return db.query('SELECT * FROM reviews').then((result) => result.rows);
}

module.exports = { getReviews };
