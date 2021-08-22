import './App.css';
import PokList from './components/common/PokList/PokList';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [size,setSize] = useState(10);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${size}`)
      .then((response) => {
        setPokemonsData(response.data.results);
      })
      .catch((error) => { });
  }, [size]);
  return (
    <div className='App'>
      <PokList data={pokemonsData} />
    <div className='pagination'>
    <button className='button' onClick={()=>{setSize(Math.max(10,size-10))}}>Previous</button>
    <button className='button' onClick={()=>{setSize(size+10)}}>Next</button>
    </div>
    </div>
  );
}

export default App;