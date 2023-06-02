describe('Проверки на основной странице', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Проверка наличия основных компонентов', () => {
    cy.dataCy('header').should('have.length', 1);
    cy.dataCy('PromoSlider').should('have.length', 1);
    cy.dataCy('ButtonsWithPadarkas').should('have.length', 1);
    cy.dataCy('AboutUs').should('have.length', 1);
    cy.dataCy('carusel').should('have.length', 3);
    cy.dataCy('FooterDesktop').should('have.length', 1);
  });

  it('проверка перехода в админ панель', () => {
    cy.get('a').contains('Админ панель').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/AdminPanel');
    });
  });

  it('проверка перехода на страницу с авторизацией', () => {
    cy.dataCy('iconAvatar').click();
    cy.get('span').contains('Войти или зарегестрироваться').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/Authorization');
    });
  });
});

export {};
