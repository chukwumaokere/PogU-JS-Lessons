//fetch vs require https
//node modules package managing
//fetch package 
//npm init

const { default: fetch } = require("node-fetch");

/*const fetch = require('node-fetch');

fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2")
    .then(res => res.json())
    .then(body => { 
        console.log(body); 
    }); */

//Todo: 
//Console.log "Here is a cat fact " + {fact}. 
// if the fact was verified (hint: status.verified) then append "This fact was verified!"
// if not, then append "This is an unverified fact"
//console.log the date the fact was created.

//Next: (check documentation for how to handle these)
// Get the ONE SPECIFIC catfact with id = "5b1b3f56841d9700146158cc"
// get 10 random cat facts and console.log them (it will require a foreach loop)
// get a fact that is waiting to be sent (check api documentation)
// check the api documentation for how you could get a dog fact and return 1 dog fact
/*
let animals = ['cat', 'dog', 'mouse'];
animals.forEach(function(animal){
    console.log("hi i'm a", animal);
});

let quotes = ['quote 1', 'quote 2', 'quote3'];
quotes.forEach(function(quote){
    console.log(quote);
})
*/

//Homework : Pick a project! 
// Challenge: Use the pokemon trading card game api: https://pokemontcg.io/ to fetch a list of cards with the name "Pikachu", then select the 5th card by its name and do a subsequent api request to the same api to return the details of that 5th card
// Use the trivia api: https://opentdb.com/api_config.php to console log 5 random trivia trivia questions; 
// Use the pokemon api: https://pokeapi.co/ to console.log information about Raichu
// Use the itunes api: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/ to return 25 results of songs by searching "Caravan Palace" (console.log them properly) 
// Use the lyrics search api: https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search to fetch the lyrics to a song you know and console.log it
// Use https://randomuser.me/ to generate a few random users 
// Or do something else you want from any of the public apis that DON'T REQUIRE AUTH. // https://github.com/public-apis/public-apis
// Challenge 2: Use the metaweather api https://www.metaweather.com/api/ to first make a request for "Chicago" location THEN using the woeid (where on earth id), fetch the current weather of Chicago and console.log 5  relevant weather details 
const url = "https://www.metaweather.com";
fetch(url + "/api/location/search/?query=chicago").then(res => res.json()).then(body => {
    const location_id = body[0].woeid;
    fetch(url + "/api/location/" + location_id + "/2020/9/21/").then(res => res.json()).then(body => {
        //console.log(body);
        let { weather_state_name, applicable_date, min_temp, max_temp, the_temp } = body[0];
        /*
        let result = body[0];
        let the_temp = result.weather_state_name;
        let applicable_date = result.applicable_date;
        let min_temp = result.min_temp;
        ...
        */
        console.log(`The current weather in Centigrade is ${the_temp}. This weather notice is applicable for the date: ${applicable_date}. The low will be ${min_temp}, the high will be ${max_temp}. The forecast is looking ${weather_state_name}`);
    })
});