import React, { useState } from 'react';

function ListaLivros({ livros, excluirLivro, editarLivro }) {
  const [editIndex, setEditIndex] = useState(null);
  const [novoTitulo, setNovoTitulo] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setNovoTitulo(livros[index]);
  };

  const handleSave = (index) => {
    editarLivro(index, novoTitulo);
    setEditIndex(null);
    setNovoTitulo('');
  };

  return (
    <ul>
      {livros.map((livro, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                className="edit-input"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Salvar</button>
            </>
          ) : (
            <>
              {livro}
              <div>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => excluirLivro(index)}>Excluir</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ListaLivros;
