// https://docs.cypress.io/api/introduction/api.html
/* global cy */

const timeout = 60000

describe('Map', () => {
  it('Load static markers', () => {
    cy.visit('/')

    cy.get('#loadStatic', {timeout}).click()

    cy.get('.cluster-icon', {timeout}).should('have.length', 12)

    cy.get('.leaflet-control-zoom-in', {timeout}).click()

    cy.get('.cluster-icon', {timeout}).should('have.length', 36)

  })
})
