// import functions and grab DOM elements
import { pokemonData } from './pokeData.js';
import { getRandomPoke, findById, incrementCatches, incrementEncounters, addInitialEncounter } from './utils.js';
import { pokeCart } from './pokecart.js';

// initialize state
const pokeImgTags = document.querySelectorAll('label > img');
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

let captureCounter = 10;
catchButton.disabled = true;

// set event listeners to update state and DOM
//radiobutton change event listener
for (let i = 0; i < pokeRadioTags.length; i++) { // for loop listens to all radios for a change
    pokeRadioTags[i].addEventListener('change', (e) => {
        catchButton.disabled = false;
        // the selected poke needs to be isolated...
        const pickedPokemon = Number(e.target.value);
            console.log(pickedPokemon);
    });
}
//recognize which poke radio has been selected
//all three pokes shown are fed into the cart array
    //three pokes must be found by id
    //examine previous lab to remember how to make a cart array based on clicks

catchButton.addEventListener('click', () => {
    //const pickedPokemon = pokeRadioTags[:checked].value;
//you are checked, and now I choose YOU
    console.log(pokeCart);

//function 
    //usues findById to take in the rawdata dn return an object. if that poke object isn't in array, 
    
    //create an enountered object in the array (id, name, encountered= 1, captured) 
   
    
    //If IS in array increment encountered by 1



//use findbyID to find CAPTURED poke and add caught by 1 (++)
//and the checked poke will find its matched id in the data


    for (let i = 0; i < (pokeRadioTags.length); i++) {
        pokeRadioTags[i].disabled = true;
    };
//and lower the roundsLeft by 1
    captureCounter--;
//add to the countdawn clock!
    roundsLeft.textContent = `You've got ${captureCounter} rounds left!`;
//change the class by toggling hidden
    resultsContainer.classList.toggle('hidden');
//disable catchbutton
    catchButton.disabled = true;
});

nextButton.addEventListener('click', () => {
// needs to reset the page staerting with...
// enabling the catchbutton
    catchButton.disabled = false;
//hiding the lower div
    resultsContainer.classList.add('hidden');
//reset the style of the pokes
    for(let i = 0; i < pokeRadioTags.length; i++) {
        pokeRadioTags[i].disabled = false;
        pokeRadioTags[i].checked = false;
        //pokeImgTags[i].style.opacity = 1;
        //pokeImgTags[i].style.width = 200px;

    }
//running the random function again
    renderPokemon();
//if the countdown clock is 0, go to the results page!

});
//picks three random Pokemons and adds them to the DOM
function renderPokemon() {
    //identify the 3 random poke vars
    let pokemonOne = getRandomPoke(pokemonData);
    let pokemonTwo = getRandomPoke(pokemonData);
    let pokemonThree = getRandomPoke(pokemonData);

        //make sure they arent the same
    while (pokemonTwo.id === pokemonOne.id) {
        pokemonTwo = getRandomPoke(pokemonData);
    }
    while (pokemonThree.id === pokemonOne.id || pokemonThree.id === pokemonTwo.id) {
        pokemonThree = getRandomPoke(pokemonData);
    }
        //name the 3 found IDs
   const oneID = findById(pokemonData, pokemonOne.id);
   const twoID = findById(pokemonData, pokemonTwo.id);
   const threeID = findById(pokemonData, pokemonThree.id);
    //add their names to the DOM
   pokeName1.textContent = oneID.pokemon;
   pokeName2.textContent = twoID.pokemon;
   pokeName3.textContent = threeID.pokemon;
    //add their images to the DOM
   pokeImgTags[0].src = oneID.url_image;
   pokeImgTags[1].src = twoID.url_image;
   pokeImgTags[2].src = threeID.url_image;
   //add their names to inputs in name 
   pokeRadioTags[0].value = oneID.id;
   pokeRadioTags[1].value = twoID.id;
   pokeRadioTags[2].value = threeID.id;

}


//run renderPokemon when page is loaded
renderPokemon();