'use strict';

function layout(title, content) {
  return /*html*/ `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Find food for FAC." />
    <meta name="keywords" content="Food, Finsbury Park, FAC" />
    <meta name="author" content="lopezelpesado, elenamarinaki" />
    <title>${title}</title>
  </head>
  <body>
    ${content}
  </body>
  </html>
    `;
}

module.exports = layout;
