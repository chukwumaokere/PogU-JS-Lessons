const fetch = require('node-fetch');

fetch('https://randomuser.me/api/').then(res => res.json()).then(person => {
    //console.log(person);
})