describe('проверка страницы авторизации', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Authorization');
  });

  it('переход между вкладками вход/регистрация', () => {
    cy.contains('Вход').click();
    cy.get('input').should('have.length', 2);
    cy.contains('Регистрация').click();
    cy.get('input').should('have.length', 6);
  });
});

export {};
