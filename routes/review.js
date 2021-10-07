'use strict';

const layout = require('../layout');

function get(request, response) {
  const html = /*html*/ `
    <form method='POST' action='review'>
        <label for="restaurant">Restaurant</label>
        <input type="text" id="restaurant" name="restaurant" />
        <label for="postcode">Postcode</label>
        <input type="text" id="postcode" name="postcode" />
        <label for="review">Review</label>
        <input type="text" id="review" name="review" />
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />

        <button type='submit'>Submit</button>
    </form>
`;
  response.send(layout('Review', html));
}

function post(request, response) {}

module.exports = { get, post };
