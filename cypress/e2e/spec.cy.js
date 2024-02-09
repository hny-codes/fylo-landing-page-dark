describe('template spec', () => {
  before(() => {
    cy.visit('http://localhost:4321/');
  });

  it('Form should accept email and display correct error message otherwise', () => {
    const formTest = () => {
      // Get form component - input
      cy.get('[data-test="form"]').as('form');
      cy.get('@form').should('exist');

      cy.get('[data-test="button"]').as('btn');
      cy.get('@btn').should('exist');
      cy.get('[data-test="error"]').should('not.exist');

      // Test for correct email
      cy.get('@form').type('test@email.com');
      cy.get('@btn').click();
      cy.get('[data-test="error"]').should('not.exist');

      cy.get('@form').clear();

      // Test for incorrect email
      cy.get('@form').type('testtext');
      cy.get('@btn').click();
      cy.get('[data-test="error"]').should('exist');
    };

    // Test mobile viewport
    cy.viewport('iphone-6');
    formTest();

    // Test desktop viewport
    cy.viewport('macbook-16');
    cy.reload();
    formTest();
  });
});
