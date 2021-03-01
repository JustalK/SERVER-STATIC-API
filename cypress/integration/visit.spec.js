/// <reference types="cypress" />

context('Window', () => {
  it('API works', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome')
  })
})
