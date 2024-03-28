import React, { useState, useEffect } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const data = await response.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons()
  }, []);

  return (
    <div className="pokedex">
      <h2>All Pokemon</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.substring(pokemon.url.length - 2, pokemon.url.length - 1)
              }.png`}
              alt={pokemon.name}
            />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
