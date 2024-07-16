# Aplicação de Lista de Livros Recomendados

Esta é uma aplicação simples em React que permite ao usuário visualizar uma lista de livros recomendados, adicionar novos livros, editar os títulos existentes e excluir livros da lista.

## Funcionalidades

- **Lista de Livros Recomendados**: Mostra uma lista inicial de livros com títulos pré-definidos.
- **Adicionar Livros**: Permite ao usuário adicionar novos livros à lista através de um formulário de entrada.
- **Editar Livros**: Permite ao usuário editar os títulos existentes na lista.
- **Excluir Livros**: Permite ao usuário remover livros da lista.

## Componentes

### `App.js`

Este é o componente principal da aplicação que gerencia o estado dos livros e renderiza os outros componentes.

### `ListaLivros.jsx`

Componente responsável por renderizar a lista de livros com funcionalidades de edição e exclusão.

### `AdicionarLivro.jsx`

Componente responsável por permitir ao usuário adicionar novos livros à lista.

## Estrutura do Projeto

projeto/
│
├── src/
│ ├── Componentes/
│ │ ├── ListaLivros.jsx
│ │ ├── AdicionarLivro.jsx
│ ├── App.js
│ ├── style.css
├── README.md
└── package.json

## Como Executar

1. Clone este repositório.
2. No diretório do projeto, execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar a aplicação em modo de desenvolvimento.
4. Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação no navegador.
