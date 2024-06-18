/*global describe, it, cy, Cypress,*/
 
import { faker } from '@faker-js/faker/locale/en'
// eslint-disable-next-line no-unused-vars
import { log } from 'mochawesome/src/utils'


describe('Signup', () => {
    const emailAdress = `${faker.datatype.uuid()}@${Cypress.env('MAILOSAUR_SERVER_ID')}.mailosaur.net`
    const password = Cypress.env('USER_PASSWORD')
  it('successfully signs up using confirmation code sent via email', () => {
    cy.fillSignUpFormAndSubmit(emailAdress, password)    
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
    })
  })
  
