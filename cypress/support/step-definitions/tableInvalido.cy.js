import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário acessa o recurso Webtables', () => {
    cy.userInfos()
    cy.visit('/')
})

And('o usuário aciona o opção Add da tabela', () => {
    cy.btnAdd()
})

And('o usuário preenche com dados inválidos', () => {
    cy.preencheInfosInvalidas()
})

When('o usuário acionar a opção Submit', () => {
    cy.addInfos()
})

Then('um indiciador de erro é mostrado', () => {
    cy.infosInvalidas()
})

And('os dados não são salvos na tabela', () => {
    cy.validaModal()
})

And('o usuário acionar a opção de editar dados da tabela', () => {
    cy.btnEditar()
})

And('o usuário editar as informações de registro com dados inválidos', () => {
    cy.preencheInfosInvalidas()
})

When('o usuário acionar a opção Submit', () => {
    cy.addInfos()
})

Then('um indiciador de erro é mostrado', () => {
    cy.infosInvalidas()
})

And('os dados não são salvos na tabela', () => {
    cy.validaModal()
})

