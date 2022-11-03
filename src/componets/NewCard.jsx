import React from "react";

const NewCard = ({poke , cambiarPok}) => {
  return (
    <div className="App">
      <h1>{poke.name}</h1>
      <img src={poke.sprites?.back_default} alt="" />
      <ul>
        <li>{poke.abilities?.[0]?.ability.name}</li>
        <li>{poke.abilities?.[1]?.ability.name}</li>
        <li>{poke.abilities?.[2]?.ability.name}</li>
      </ul>
      
      <button onClick={cambiarPok}>elegir pokemon</button>
    </div>
  );
};

export default NewCard;
