'use strict';

const users = [{ id: 1, name: 'Alex' }];
const restaurants = [
  { id: 1, name: 'Example Restaurant', address: 'EX1 MPL', rating: 5 },
];
const reviews = [
  {
    id: 1,
    place_id: 1,
    author_id: 1,
    heading: 'THIS PLACE IS AWFUL',
    review: 'Jokes, I love it.',
  },
];

module.exports = { users, restaurants, reviews };
