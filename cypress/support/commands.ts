Cypress.Commands.add('dataCy', (value) => {
  cy.get(`[data-cy=${value}]`);
});
Cypress.Commands.add('interceptRequest', (method) => {
  cy.intercept({ method, path: '/api/employees' }, (req) => {
    req.alias = method;
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
export {};
