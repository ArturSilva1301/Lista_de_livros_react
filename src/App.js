import React, { useState } from 'react';
import './style.css'; // Importando o arquivo CSS
import ListaLivros from './Componentes/lista_livros';
import AdicionarLivro from './Componentes/adicionar_livro';

function App() {
  const [livros, setLivros] = useState([
    '1984 - George Orwell',
    'To Kill a Mockingbird - Harper Lee',
    'The Great Gatsby - F. Scott Fitzgerald',
    'One Hundred Years of Solitude - Gabriel Garcia Marquez',
    'Pride and Prejudice - Jane Austen'
  ]);

  const adicionarLivro = (novoLivro) => {
    setLivros([...livros, novoLivro]);
  };

  const excluirLivro = (index) => {
    setLivros(livros.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Lista de Livros Recomendados</h1>
      <ListaLivros livros={livros} excluirLivro={excluirLivro} />
      <AdicionarLivro adicionarLivro={adicionarLivro} />
    </div>
  );
}

export default App;
