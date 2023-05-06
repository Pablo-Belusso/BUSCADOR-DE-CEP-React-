import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState(''); // Armazena o valor digitado no INPUT

  const [cep, setCep] = useState({}); // Começa com CEP vazio

  async function manipularPesquisa() {
    /* "async" transforma a função em assíncrona (demora um pouco) pois vai ter que fazer requisição na API  */

    // 01001000/json/

    if (input === '') {  // Condição se o input ficar vazio
      alert('Preencha algum CEP!')
      return;
    }

    try {  // É o que você quer fazer, mas pode dar errado

      const response = await api.get(`${input}/json`) // espera a requisição do CEP na API
      setCep(response.data) // Passa o valor da requisição para o "useState"
      console.log(response.data);
      setInput(""); //Limpa o Input


    } catch { // Caso dê errado ele cai no bloco "catch"

      alert("Ops, erro ao buscar o CEP!")
      setInput("") //Limpa o Input
    }


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

      {Object.keys(cep).length > 0 && ( // Verifica se o valor do Input é maior que 0
        <main className='principal'>
          <h2>CEP: {cep.cep} </h2>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}


    </div>

  );
}

export default App;
