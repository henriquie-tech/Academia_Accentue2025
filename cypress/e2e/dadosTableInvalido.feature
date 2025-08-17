#utf-8
#language: pt

Funcionalidade: Processo de adicionar e editar dados da tabela de forma inválida

Contexto: 
Dado que o usuário acessa o recurso Webtables

Cenário: Adicionar dados na tabela de forma inválida

E o usuário aciona o opção Add da tabela
E o usuário preenche com dados inválidos
Quando o usuário acionar a opção Submit
Então um indiciador de erro é mostrado
E os dados não são salvos na tabela

Cenário: Editar dados já registrados na tabela com dados inválidos

E o usuário acionar a opção de editar dados da tabela
E o usuário editar as informações de registro com dados inválidos
Quando o usuário acionar a opção Submit
Então um indiciador de erro é mostrado
E os dados não são salvos na tabela

