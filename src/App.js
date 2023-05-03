import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Buscador de CEP:</h1>

      <div className="caixaInput">
        <input
          type="text"
          placeholder="Digite o seu CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color='#FFF' />
        </button>

      </div>

    </div>

  );
}

export default App;
