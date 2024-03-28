import React, { useState, useEffect } from 'react';

function Search() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({ name: "pikachu", height: 4, weight: 60, sprites: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}});
  
  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/{input,toLowerCase()}");
    const data = await response.json();
    setPokemon(data.results);
  };
  return (
    <div className="search">
      <h2>Search a Pokemon</h2>
        <div className="search-box">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={fetchPokemon}>Search</button>
        </div>

    

      {pokemon && (
      <div id="pokemon-card">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} />
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
      )}
    </div>
  );
}

export default Search;
