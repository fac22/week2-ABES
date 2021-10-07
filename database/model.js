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

function writeReviews(submission) {
  // Security reasons
  const { restaurant, postcode, review, username } = submission;
  // we'll receive restaurant-name, restaurant-address, review-text, username

  const queryUsers = /*sql*/ `
    INSERT INTO
      users(username)
    VALUES ($1)
  `;
  db.query(queryUsers, [username]);

  const queryPlace = /*sql*/ `
    INSERT INTO
        place
        (place_name, postcode)
    VALUES
        ($1, $2)
        `;
  db.query(queryPlace, [restaurant, postcode]);

  const queryReviews = /*sql*/ `
    INSERT INTO
      reviews(review)
    VALUES
      ($1)
  `;
  return db.query(queryReviews, [review]);
}

module.exports = { getReviews, writeReviews };
