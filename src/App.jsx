import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
      

import './App.css'
import Cards from './componets/Cards'
import NewCard from './componets/NewCard';


function App() {
  const[poke,setPokemon]=useState([])

  const pokedex=[...poke]
 useEffect(()=>{
       
        
           cambiarPok()
 
  
   },[])
    
  
  const cambiarPok=()=>{
     
    const i=Math.floor(Math.random()*201)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(res=>{
      pokedex.push(
        res.data
      )
      setPokemon([...poke,res.data])
    }) 
      

   }
  console.log(poke)
  

  
  return (
    <div className='cont-pokemon'>
      { poke.map(items =>(<NewCard poke={items} key={items.name} cambiarPok={cambiarPok}/>))}
{/*       
      <button onClick={cambiarPok}>elegir pokemon</button> */}
    </div>
  )
}

export default App
