const BTN_ADD = '#addNewRecordButton'
const INPUT_FIRST_NAME = '#firstName'
const INPUT_LAST_NAME = '#lastName'
const INPUT_EMAIL = '#userEmail'
const INPUT_AGE = "#age"
const INPUT_SALARY = "#salary"
const INPUT_DEPARTMENT = "#department"
const BTN_SUBMIT = "#submit"
const TABLE_QTD = ".rt-td"
const BTN_EDIT = '#edit-record-3'
const BTN_DELETE = '#delete-record-3'
const MODAL_FORM = '.modal-content'

Cypress.Commands.add('btnAdd', () => {
    cy.get(BTN_ADD).click()
})

Cypress.Commands.add('preencheInfos', () => {
    cy.get(INPUT_FIRST_NAME).clear().type(Cypress.env('userName').name, {log: false})
    cy.get(INPUT_LAST_NAME).clear().type(Cypress.env('userName').lastname, {log: false})
    cy.get(INPUT_EMAIL).clear().type(Cypress.env('userName').email, {log: false})
    cy.get(INPUT_AGE).clear().type(Cypress.env('userName').age, {log: false})
    cy.get(INPUT_SALARY).clear().type(Cypress.env('userName').salary, {log: false})
    cy.get(INPUT_DEPARTMENT).clear().type(Cypress.env('userName').department, {log: false})
})

Cypress.Commands.add('addInfos', () => {
    cy.get(BTN_SUBMIT).click()
})

Cypress.Commands.add('validaTable', () => {
    cy.get(TABLE_QTD).should('contain', Cypress.env('userName').name)
})

Cypress.Commands.add('btnEditar', () => {
    cy.get(BTN_EDIT).click()
})

Cypress.Commands.add('btnDeletar', () => {
    cy.get(BTN_DELETE).click()
})

Cypress.Commands.add('validaDeletar', () => {
    cy.get(TABLE_QTD).should('not.have.value', 'Kierra')
})

Cypress.Commands.add('preencheInfosInvalidas', () => {
    cy.get(INPUT_FIRST_NAME).clear().type(Cypress.env('userNameInvalido').name, {log: false})
    cy.get(INPUT_LAST_NAME).clear().type(Cypress.env('userNameInvalido').lastname, {log: false})
    cy.get(INPUT_EMAIL).clear().type(Cypress.env('userNameInvalido').email, {log: false})
    cy.get(INPUT_AGE).clear().type(Cypress.env('userNameInvalido').age, {log: false})
    cy.get(INPUT_SALARY).clear().type(Cypress.env('userNameInvalido').salary, {log: false})
    cy.get(INPUT_DEPARTMENT).clear().type(Cypress.env('userNameInvalido').department, {log: false})
})

Cypress.Commands.add('infosInvalidas', () => {
    cy.get(INPUT_EMAIL).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(INPUT_AGE).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(INPUT_SALARY).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})

Cypress.Commands.add('validaModal', () => {
    cy.get(MODAL_FORM).should('be.visible')
})


