describe('Hamburger Menu Visibility in Mobile view Test', () => {

  beforeEach(() => {
    cy.viewport(375, 677);
    cy.visit('https://www.eight25media.com/');
  });

  it('should show hamburger menu on smaller screens', () => {
    cy.get('.navbar-toggler').should('be.visible');
  });

});