'use strict';

const db = require('./connection.js');

function getReviews() {
  // create an obj { restaurant-name, address, rating, author, review}
  const queryStr = /*sql*/ `
    SELECT
      place.place_name,
      place.postcode,
      place.rating,
      users.username,
      reviews.review
    FROM reviews
    JOIN place
      ON reviews.place_id = place.place_id
    JOIN users
      ON reviews.author_id = users.author_id
  `;

  return db.query(queryStr).then((result) => result.rows);
}

module.exports = { getReviews };
