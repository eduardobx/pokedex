import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
const Cards = () => {
  const[poke,setPokemon]=useState({})
  
  useEffect(()=>{
         const i=Math.floor(Math.random()*200)
         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
   .then(res=>setPokemon(res.data))
  },[])

  const cambiarPok=(e)=>{
     
    
    const i=Math.floor(Math.random()*200)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(res=>setPokemon(res.data))

    consolo.log(e.target)
   }


  return (
    <div className="App">
   <h1>{poke.name}</h1>
    <img src={poke.sprites?.back_default} alt="" />
    <ul>
      <li>{poke.abilities?.[0]?.ability.name}</li>
      <li>{poke.abilities?.[1]?.ability.name}</li>
      <li>{poke.abilities?.[2]?.ability.name}</li>
    </ul>
    <button onClick={cambiarPok} >esocger pokemon</button>
    </div>
  );
};

export default Cards;