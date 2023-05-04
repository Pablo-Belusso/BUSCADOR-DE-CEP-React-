import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {

  const [input, setInput] = useState(''); // Armazena o valor digitado no INPUT

  function manipularPesquisa() {
    alert("Valor do Input: " + input)
  }

  return (
    <div className="container">
      <h1 className="titulo">Buscador de CEP:</h1>

      <div className="caixaInput">
        <input
          type="text"
          placeholder="Digite o seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)} // Passa o valor digitado para usestate
        />

        <button className="botaoProcura" onClick={manipularPesquisa}>
          <FiSearch size={25} color='#FFF' />
        </button>

      </div>

      <main className='principal'>
        <h2>CEP: 74815-700</h2>
        <span>Av. São João, 250</span>
        <span>Ed. Bella Vittá</span>
        <span>Setor Alto da Glória</span>
        <span>Goiânia - GO</span>
      </main>

    </div>

  );
}

export default App;
