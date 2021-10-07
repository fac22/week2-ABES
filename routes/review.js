'use strict';

const { writeReviews } = require('../database/model.js');

const layout = require('../layout');
const database = require('../database.js');
const { query } = require('express');

function get(request, response) {
  const html = /*html*/ `
    <form method='POST' action='/review'>
        <label for="restaurant">Restaurant</label>
        <input type="text" id="restaurant" name="restaurant" />
        <label for="postcode">Postcode</label>
        <input type="text" id="postcode" name="postcode" />
        <!--<label for="heading">Heading</label>
        <input type="text" id="heading" name="heading" /> -->
        <label for="review">Review</label>
        <input type="text" id="review" name="review" />
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />

        <button type='submit'>Submit</button>
    </form>
`;
  response.send(layout('Review', html));
}

function post(request, response) {
  // this will all need to be replaced with SQL
  // const { restaurant, postcode, review, username, heading } = request.body;
  // const restaurantObj = {
  //   name: restaurant,
  //   id: 2,
  //   address: postcode,
  //   rating: 1,
  // };
  // const userObj = { id: 2, name: username };
  // const reviewObj = { id: 2, place_id: 2, author_id: 2, heading, review };
  // these represent SQL inserts
  // database.users.push(userObj);
  // database.reviews.push(reviewObj);
  // database.restaurants.push(restaurantObj);
  // console.log(database.users, database.reviews, database.restaurants);
  writeReviews(request.body);
  response.redirect('/');
}

module.exports = { get, post };
