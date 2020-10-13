import { pokemonData } from './pokeData.js';

export function getRandomPoke() {
    const randomPokeIndex = Math.floor(Math.random() * pokemonData.length);

    return pokemonData[randomPokeIndex];
}

//return an item with matching id
export function findById(pokemonData, pokeId) {
    for (let i = 0; i < pokemonData.length; i++) {
        const item = pokemonData[i];
        if (item.id === pokeId) {
            return item;
        } 
    } return null;
}

//export function getPokeById() {}