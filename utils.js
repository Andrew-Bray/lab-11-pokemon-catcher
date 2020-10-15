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

export function addInitialEncounter(someArray, someId) {
    const pokemonObject = findById(pokemonData, someId);
    const newEncounter = {
        pokemon: pokemonObject.pokemon,
        id: pokemonObject.id,
        encounters: 0,
        catches: 0,
    }
    someArray.push(newEncounter);
}

 
export function incrementEncounters(someArray, someId) {
    let result = findById(someArray, someId);
    if (!result) {
        addInitialEncounter(someArray, someId);
        //holy shitballs hmmm,
        result = findById(someArray, someId);
    }   
        result.encounters++;
}
//incrementCatches
export function incrementCatches(someArray, someId) {
    let result = findById(someArray, someId);
    if (!result) {
        addInitialEncounter(someArray, someId);
        //holy shitballs hmmm
        result = findById(someArray, someId);
    }   
        result.catches++;
}

export function setInLocalStorage(key, value) {
    const stringedObject = JSON.stringify(value);
    localStorage.setItem(key, stringedObject);
}

export function getFromLocalStorage(key) {
    const stringedKey = localStorage.getItem(key);
    return JSON.parse(stringedKey)
}