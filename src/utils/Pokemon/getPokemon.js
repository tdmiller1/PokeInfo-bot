const fetch = require('node-fetch');
const  POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

//=======================$general helper functions====================//
async function getPokemonJSON(message) {
    const pokemon = message.content.split(" ")[1];
    let response = await fetch(`${POKEMON_URL}/${pokemon}`);
    const pokemonData = response.json();
    return pokemonData;
}

//=======================EXPORTS====================//
module.exports = { getPokemonJSON };