import './App.css';
import PokList from './components/common/PokList/PokList';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => {
        const pokemons = response.data.results;
        pokemons.map((pokemon) => {
          axios.get(pokemon.url)
            .then((response) => {
              const data = response.data;
              const pokData = {
                name: data.name,
                number: data.id,
                weight: data.weight,
                length: data.length,
                hp: 20,
                attack: 20,
                imageURL: data.sprites.other.dream_world.front_default,
              }
              const poksData = pokemonsData;
              poksData.push(pokData);
              setPokemonsData(poksData);
            })
            .catch((error) => { });
        });
      })
      .catch((error) => { });
  });
  return (
    <div className='App'>
      <PokList data={pokemonsData} />
    </div>
  );
}

export default App;
