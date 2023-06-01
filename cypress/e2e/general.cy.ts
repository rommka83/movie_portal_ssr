describe('main page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('check for presence of components', () => {
    cy.dataCy('header').should('have.length', 1);
    cy.dataCy('PromoSlider').should('have.length', 1);
    cy.dataCy('ButtonsWithPadarkas').should('have.length', 1);
    cy.dataCy('AboutUs').should('have.length', 1);
    cy.dataCy('carusel').should('have.length', 3);
    cy.dataCy('FooterDesktop').should('have.length', 1);
  });

  it('go to admin panel', () => {
    cy.contains('Админ панель').should('have.length', 1);
    // cy.contains('Админ панель').click();
    // cy.location().should((loc) => {
    //   expect(loc.href).to.eq('http://localhost:3000/AdminPanel');
    // });
  });
});

export {};
