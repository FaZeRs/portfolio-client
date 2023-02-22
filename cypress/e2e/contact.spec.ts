context('Contact', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  // todo: fix this test. Need to mock the form submission
  // it('submits form with valid inputs', () => {
  //   cy.get('input[name="name"]').type('John Doe')
  //   cy.get('input[name="email"]').type('johndoe@example.com')
  //   cy.get('textarea[name="message"]').type('This is a test message')
  //   cy.get('button[type="submit"]').click()

  //   cy.get('[role="alert"]').should('have.class', 'bg-green-100')
  //   cy.get('input[name="name"]').should('not.have.class', 'bg-red-50')
  //   cy.get('input[name="email"]').should('not.have.class', 'bg-red-50')
  //   cy.get('textarea[name="message"]').should('not.have.class', 'bg-red-50')
  //   cy.contains('Message sent sucessfuly!')
  // })

  it('displays error messages with empty inputs', () => {
    cy.get('button[type="submit"]').click()

    cy.get('input[name="name"]').should('have.class', 'bg-red-50')
    cy.get('input[name="email"]').should('have.class', 'bg-red-50')
    cy.get('textarea[name="message"]').should('have.class', 'bg-red-50')
    cy.contains('name is a required field')
    cy.contains('email is a required field')
    cy.contains('message is a required field')
  })

  it('displays error messages with invalid email', () => {
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="email"]').type('notavalidemail')
    cy.get('textarea[name="message"]').type('This is a test message')
    cy.get('button[type="submit"]').click()

    cy.get('input[name="email"]').should('have.class', 'bg-red-50')
    cy.contains('email must be a valid email')
  })
})
