import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário acessa o recurso Webtables', () => {
    cy.userInfos()
    cy.visit('/')
})

And('o usuário aciona o opção Add da tabela', () =>{
    cy.btnAdd()
})

And('o usuário preenche suas informações válidas', () =>{
    cy.preencheInfos()
})

When('o usuário acionar a opção Submit', () =>{
    cy.addInfos()
})

Then('o cadastro é adicionado na tabela', () =>{
    cy.validaTable()
})

And('o usuário acionar a opção de editar dados da tabela', () =>{
    cy.btnEditar()
})

And('o usuário editar as informações de registro', () =>{
    cy.preencheInfos()
})

When('o usuário acionar a opção Submit', () =>{
    cy.addInfos()
})

Then('o cadastro é adicionado na tabela', () =>{
    cy.validaTable()
})

When('o usuário aciona o opção excluir dados na tabela', () =>{
    cy.btnDeletar()
})

Then('o cadastro é excluido da tabela', () =>{
    cy.validaDeletar()
})

And('o usuário adiciona informações na tabela', () => {
    cy.btnAdd()
    cy.preencheInfos()
    cy.addInfos()
    cy.validaTable()
    cy.userInfos()
})

And('o usuário edita as informações na tabela', () => {
    cy.btnEditar()
    cy.preencheInfos()
    cy.addInfos()
    cy.validaTable()
})

When('o usuário excluir os dados da tabela', () => {
    cy.btnDeletar()
})

Then('os dados são deletados da tabela', () => {
    cy.validaDeletar()
})

