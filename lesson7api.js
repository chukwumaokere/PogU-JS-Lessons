const fetch = require('node-fetch');

fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2").then(res => res.text()).then(body => console.log(body));