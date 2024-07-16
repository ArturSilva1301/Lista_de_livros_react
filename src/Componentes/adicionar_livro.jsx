import React, { useState } from 'react';

function AdicionarLivro({ adicionarLivro }) {
  const [novoLivro, setNovoLivro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (novoLivro.trim()) {
      adicionarLivro(novoLivro);
      setNovoLivro('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={novoLivro}
        onChange={(e) => setNovoLivro(e.target.value)}
        placeholder="Adicionar novo livro"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AdicionarLivro;
