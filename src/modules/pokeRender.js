import { pokeCard } from './displayHome.js';

const pokemonNumber = 9;
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  pokeCard(pokemon);
};

const pokemonList = async () => {
  for (let i = 1; i <= pokemonNumber; i += 1) {
    getPokemon(i);
  }
};

export default pokemonList;