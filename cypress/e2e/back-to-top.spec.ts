context('BackToTop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the component', () => {
    cy.get('#back-to-top').should('exist')
  })

  it('displays the scroll-to-top button when user has scrolled down', () => {
    cy.window().scrollTo(0, 150)
    cy.get('#back-to-top').should('be.visible')
  })

  it('hides the scroll-to-top button when user has not scrolled down', () => {
    cy.window().scrollTo(0, 50)
    cy.get('#back-to-top').should('not.be.visible')
  })

  it('scrolls to top when the button is clicked', () => {
    cy.window().scrollTo(0, 150)
    cy.get('#back-to-top').click()
    cy.window().should('have.property', 'scrollY', 0)
  })
})
