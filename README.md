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

#### Principais Funções

1. **`handleEdit(index)`**

**Funcionalidade:**

- Esta função é chamada quando o botão "Editar" é clicado.
- Atualiza o estado `editIndex` para o índice do livro que está sendo editado, permitindo que o campo de input para edição seja exibido.
- Atualiza o estado `novoTitulo` com o título atual do livro a ser editado, preenchendo o campo de input com o título existente.

**Código:**

```const handleEdit = (index) => {
  setEditIndex(index);
  setNovoTitulo(livros[index]);
}```


2. **`handleSave(index)`**

**Funcionalidade:**

- Esta função é chamada quando o botão "Salvar" é clicado após a edição do título do livro.
- Chama a função `editarLivro`, que é passada via props, para atualizar o título do livro no índice especificado.
- Redefine os estados `editIndex` e `novoTitulo` para seus valores iniciais (`null` e string vazia, respectivamente), ocultando o campo de input e o botão "Salvar".

**Código:**

```const handleSave = (index) => {
  editarLivro(index, novoTitulo);
  setEditIndex(null);
  setNovoTitulo('');
};```

#### Resumo do Componente

O componente `ListaLivros` é responsável por exibir uma lista de livros e fornecer funcionalidades para editar e excluir cada livro. Ele gerencia dois estados locais:

- `editIndex`: Indica o índice do livro que está sendo editado. Se for `null`, nenhum livro está em modo de edição.
- `novoTitulo`: Armazena o novo título do livro durante a edição.

**Estrutura e Renderização:**

- Itera sobre a lista de livros (`livros` passada via props) e renderiza cada livro como um item de lista (`<li>`).
- Se um livro está em modo de edição (`editIndex === index`), exibe um campo de input pré-preenchido com o título do livro e um botão "Salvar".
- Caso contrário, exibe o título do livro e botões "Editar" e "Excluir".
- Ao clicar em "Editar", o campo de input é exibido, permitindo a edição do título do livro.
- Ao clicar em "Salvar", o título do livro é atualizado e a interface retorna ao modo de exibição normal.
- Ao clicar em "Excluir", o livro é removido da lista chamando a função `excluirLivro`, também passada via props.

### `AdicionarLivro.jsx`

Componente responsável por permitir ao usuário adicionar novos livros à lista.

#### Principais Funções

1. **`handleSubmit(event)`**

**Funcionalidade:**

- Esta função é chamada quando o formulário é submetido (quando o usuário clica no botão "Adicionar").
- Prevê o comportamento padrão do formulário que recarrega a página ao ser submetido, usando `event.preventDefault()`.
- Verifica se o campo de input não está vazio ou contém apenas espaços em branco usando `novoLivro.trim()`.
- Se o campo de input contém um valor válido, chama a função `adicionarLivro` (passada via props) para adicionar o novo livro à lista.
- Redefine o estado `novoLivro` para uma string vazia, limpando o campo de input.

**Código:**

```const handleSubmit = (event) => {
  event.preventDefault();
  if (novoLivro.trim()) {
    adicionarLivro(novoLivro);
    setNovoLivro('');
  }
};```

#### Resumo do Componente

O componente `AdicionarLivro` é responsável por fornecer uma interface para adicionar novos livros à lista. Ele gerencia um estado local:

- `novoLivro`: Armazena o título do novo livro a ser adicionado. Inicializado como uma string vazia.

**Estrutura e Renderização:**

- Renderiza um formulário contendo um campo de input e um botão "Adicionar".
- O campo de input permite ao usuário digitar o título do novo livro.
- O botão "Adicionar" submete o formulário.
- Ao submeter o formulário, se o campo de input não estiver vazio, o novo livro é adicionado à lista e o campo de input é limpo.

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
```
