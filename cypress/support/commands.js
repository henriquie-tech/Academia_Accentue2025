// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from "@faker-js/faker"
Cypress.Commands.add('userInfos', () => {

    const altName = faker.person.firstName()
    Cypress.env('userName').name = altName

    const altLastName = faker.person.lastName()
    Cypress.env('userName').lastname = altLastName

    const altEmail = faker.internet.email()
    Cypress.env('userName').email = altEmail

    const altAge = faker.string.numeric(2)
    Cypress.env('userName').age = altAge

    const altSalary = faker.string.numeric(5)
    Cypress.env('userName').salary = altSalary

    const altDepartment = faker.person.jobType()
    Cypress.env('userName').department = altDepartment

    return altAge, altDepartment, altEmail, altLastName, altName

})