describe('EIGHT25MEDIA Website Tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('https://www.eight25media.com/');
  });

  it('Homepage Test - should load and have the title containing "eight25"', () => {
    cy.title().should('include', 'eight25');
  });

  it('Navigation Test - should navigate to the Work page and verify "Our Work" is visible', () => {
    cy.contains('header a', 'Work', { matchCase: false }).click();

    cy.contains('Our Work', { matchCase: false }).should('be.visible');
    cy.url().should('include', '/work');
  });

   it('Form Interaction - should navigate to Contact page and fill form fields correctly', () => {
    cy.fixture('contactFormData').then((data) => {
        cy.scrollTo('bottom');
        cy.get('footer').should('be.visible');
        cy.contains('a', 'Contact Us', { matchCase: false }).click();
        cy.url().should('include', '/lets-talk');
        cy.contains('Email Address').scrollIntoView();
        cy.get('input[name="your-name"]').type(data.name);
        cy.get('input[name="your-email"]').type(data.email);
        cy.get('textarea[name="your-message"]').type(data.message);

        cy.get('input[name="your-name"]').should('have.value', data.name);
        cy.get('input[name="your-email"]').should('have.value', data.email);
        cy.get('textarea[name="your-message"]').should('have.value', data.message);
    });
  });

});
