// import functions and grab DOM elements
import { pokemonData } from './pokeData.js';
import { getRandomPoke, findById } from './utils.js';

// initialize state
const pokeImgTags = document.querySelectorAll('img');
const pokeRadioTags = document.querySelectorAll('input');
const pokeName1 = document.getElementById('poke-name1');
const pokeName2 = document.getElementById('poke-name2');
const pokeName3 = document.getElementById('poke-name3');
const chosenPoke = document.getElementById('chosen-poke');
const roundsLeft = document.getElementById('rounds-left');
const pokeContainer = document.getElementById('poke-container');
const resultsContainer = document.getElementById('results-container');
const catchButton = document.getElementById('catch-button');
const nextButton = document.getElementById('next-button');

let captureAmount = 0;

// set event listeners to update state and DOM

catchButton.addEventListener('click', () => {
//recognize which poke radio has been selected

//contact the hardcode "shopping list"

//and the checked poke will find its matched id in the data

//and raise the caught value by 1

//and the unchecked poke will find its matched ids in the data

//add to the countdawn clock!

//and raise their encounters by 1

//change the class by toggling hidden
    resultsContainer.classList.toggle('hidden');

});

nextButton.addEventListener('click', () => {
// needs to reset the page staerting with...

//unchecking and clearing out the 3 pokemon radios (for loop)

//hiding the lower div

//running the random function again
    renderPokemon();
//if the countdown clock is 0, go to the results page!

});

function renderPokemon() {
    let pokemonOne = getRandomPoke(pokemonData);
    let pokemonTwo = getRandomPoke(pokemonData);
    let pokemonThree = getRandomPoke(pokemonData);

    while (pokemonTwo.id === pokemonOne.id) {
        pokemonTwo = getRandomPoke(pokemonData);
    }
    while (pokemonThree.id === pokemonOne.id || pokemonThree.id === pokemonTwo.id) {
        pokemonThree = getRandomPoke(pokemonData);
    }
    //(for loop for this all)
        //make a function that gets 
   const oneID = findById(pokemonData, pokemonOne.id);
   const twoID = findById(pokemonData, pokemonTwo.id);
   const threeID = findById(pokemonData, pokemonThree.id);

   console.log(oneID.pokemon);
   
   pokeName1.textContent = oneID.pokemon;
   pokeName2.textContent = twoID.pokemon;
   pokeName3.textContent = threeID.pokemon;

   pokeImgTags[1].src = oneID.url_image;
   pokeImgTags[2].src = twoID.url_image;
   pokeImgTags[3].src = threeID.url_image;
   
}
    // use id of 1 to get img of 1

    //and change textcontent of phoneImgTags.src in 1 

    //use id of one to get name of one

    //and change the pokeName.textContent of 1




renderPokemon();
//create a function const 
//pick three pokemons using the random generator

//and uses the id to replace the radio images with now ones

//and replaces the name with the new name
