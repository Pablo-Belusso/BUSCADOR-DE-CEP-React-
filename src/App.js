import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Buscador de CEP:</h1>

      <div className="caixaInput">
        <input
          type="text"
          placeholder="Digite o seu CEP..."
        />

        <button className="botaoProcura">
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
