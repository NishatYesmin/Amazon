describe('Amazon', () => {
  it('Test Cases', () => {

    cy.visit('https://www.amazon.com/')
    cy.wait(5000);
    cy.get('#searchDropdownBox').select('Software', {force: true});
    cy.get('body').type('games')
    cy.get('#nav-search-submit-button').click( {force: true});
    cy.end()
  })
})