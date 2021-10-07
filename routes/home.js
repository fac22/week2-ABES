'use strict';

const layout = require('../layout');

function get(request, response) {
  const html = /*html*/ `
  <header>
    <img src="" alt=""/>
    <h1>FAC EATS</h1>
  </header>

  <nav>
    <a href="/review">Review</a>
  </nav>

  <main>
    <article>
        <h2>Restaurant Name</h2>
        <p>Address</p>
        <p>Rating: </p>
        <p>Author</p>
        <p>Review</p>
    </article>
  </main>
  `
  response.send(layout('Home', html));
}

module.exports = { get };
