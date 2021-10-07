'use strict';

const { getReviews } = require('../database/model.js');

const layout = require('../layout');

function get(request, response) {
  getReviews()
    .then((data) =>
      data.map(
        (review) => /*html*/ `
          <article>
                <h2>${review.place_name}</h2>
                <p>${review.postcode}</p>
                <p>${review.rating.toString()}</p>
                <p>${review.username}</p>
                <p>${review.review}</p>
            </article>
          `
      )
    )
    .then(
      (reviewsHtml) => /*html*/ `
          <header>
            <img src="" alt=""/>
            <h1>FAC EATS</h1>
          </header>

          <nav>
            <a href="/review">Review</a>
          </nav>

          <main>
            ${reviewsHtml}
          </main>
          `
    )
    .then((homeHtml) => response.send(layout('Home', homeHtml)));
  // const homeHtml = /*html*/ `
  // <header>
  //   <img src="" alt=""/>
  //   <h1>FAC EATS</h1>
  // </header>

  // <nav>
  //   <a href="/review">Review</a>
  // </nav>

  // <main>
  //   ${reviewsHtml}
  // </main>
  // `;
  // response.send(layout('Home', homeHtml));
}

module.exports = { get };
