Cypress.Commands.add('goToUrl', (urlToVisit) => { 
	cy.visit(urlToVisit)
 })