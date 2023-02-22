context('Footer', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('toggles dark mode when the button is clicked', () => {
    // verify that the button exists
    cy.get('#dark-mode').should('exist')

    // click the button to toggle dark mode
    cy.get('#dark-mode').click()

    // verify that the dark mode was applied to the component's text color
    cy.get('nav').should('have.css', 'background-color', 'rgb(30, 41, 59)')

    // click the button again to toggle back to light mode
    cy.get('#dark-mode').click()

    // verify that the light mode was applied to the component's text color
    cy.get('nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})
