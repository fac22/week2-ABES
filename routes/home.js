'use strict';

const layout = require('../layout');

function get(request, response) {
  const html = /* html */ `
  <header>
    <img src="" alt=""/>
    <h1 class="center">FAC eats?</h1>
  </header>

  <nav class="banner center">
    <a href="/review">Add your review</a>
  </nav>

  <main>
    <article class="center box">
        <div class='row'>
        <h2>RESTAURANT NAME </h2>
        <p> RATING</p>
        <p>Postcode</p>
        </div>
        <p>Username: Review</p>
        </article>
    <article class="center box">
      <div class='row'>
        <h2>Serious Dan's wet burgers </h2>
        <p> 🍔 / 5 </p>
        <p>WE11 0FH</p>
      </div>
        <p>Betty: Don't go here, it's a travel agent!
    </article>
    <article class="center box">
      <div class='row'>
        <h2>El Jefe's</h2>
        <p> 🍔🍔🍔 / 5 </p>
        <p>SE10 6QQ</p>
      </div>
        <p>Capybara: I loved it!</p>
        <p>Goldfish: I don't love it! </p>
    </article>
  </main>
  `;
  response.send(layout('Home', html));
}

module.exports = { get };
