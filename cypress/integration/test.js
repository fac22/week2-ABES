it('can run a test', () => {
  assert.equal(1, 1);
});

it('can display our website', () => {
  cy.visit('/');
  cy.get('h1');
});
