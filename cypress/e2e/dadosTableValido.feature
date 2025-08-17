#utf-8
#language: pt

Funcionalidade: Processo completo de adicionar, editar e excluir dados da tabela

Contexto: 
Dado que o usuário acessa o recurso Webtables

Cenário: Adicionar cadastro na tabela com dados válidos

E o usuário aciona o opção Add da tabela
E o usuário preenche suas informações válidas
Quando o usuário acionar a opção Submit
Então o cadastro é adicionado na tabela

Cenário: Editar cadastro na tabela

E o usuário acionar a opção de editar dados da tabela
E o usuário editar as informações de registro
Quando o usuário acionar a opção Submit
Então o cadastro é adicionado na tabela

Cenário: Excluir cadrastro na tabela

Quando o usuário aciona o opção excluir dados na tabela
Então o cadastro é excluido da tabela

Cenário: Criar, editar, excluir um cadastro da tabela

E o usuário adiciona informações na tabela
E o usuário edita as informações na tabela
Quando o usuário excluir os dados da tabela
Então os dados são deletados da tabela
