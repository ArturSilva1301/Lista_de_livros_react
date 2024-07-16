import React from 'react';

function ListaLivros({ livros, excluirLivro }) {
  return (
    <ul>
      {livros.map((livro, index) => (
        <li key={index}>
          {livro} 
          <button onClick={() => excluirLivro(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaLivros;
