import {Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const search = require('../../pages/google_page')

Given('A common user goes to the google page', () =>{
    cy.visit('/')
})

When('He search for "Itaú Linkedin"', () =>{
    search.writeSearch('Itaú Linkedin{enter}')
})

And('The search result is selected', () =>{
    search.selectFirstResultWithoutAd()
})

Then('It will be possible to view information about Itaú', () =>{
    cy.url().should('contains', 'itau?trk=nav_type_overview') //Aba em que fica a informação de "Sobre Nós"
})

Then('The linkedin AuthWall is displayed', () => {
    cy.url().should('contains', 'authwall')
})

