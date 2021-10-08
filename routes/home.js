'use strict';

const { getReviews } = require('../database/model.js');

const layout = require('../layout');

function get(request, response) {
  getReviews()
    .then((data) => {
      console.log(data);
      return data
        .map(
          (review) => /* html */ `
          <article class='center box'>
        <div class='row'>
        <h2>${review.place_name} </h2>
        <p>${review.rating || `0 / 5`}</p>
        <p>${review.postcode}</p>
        </div>
        <p>${review.username}: ${review.review}</p>
        </article>
          `
        )
        .join('');
    })
    .then(
      (reviewsHtml) => /* html */ `
           <header>
    <img src="" alt=""/>
    <h1 class="center">FAC eats?</h1>
  </header>

  <nav class="banner center">
    <a href="/review">Add your review</a>
  </nav>

  <main>
               ${reviewsHtml}
  </main>
          `
    )
    .then((homeHtml) => {
      response.send(layout('Home', homeHtml));
    })
    .catch(() => response.send(`<h1> I am error! </h1>`));
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
