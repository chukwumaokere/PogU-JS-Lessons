const fetch = require('node-fetch');

fetch("https://api.lyrics.ovh/v1/Rick Astley/Never Gonna Give You Up")
    .then(res => res.json())
    .then(RickRoll => {
        if(RickRoll['lyrics'].length > 0){
            console.log(RickRoll['lyrics']);
            console.log("('Never Gonna Give you Up' by Rick Astley)");
        }else{
            console.log("Error: Could not load lyrics for 'Never Gonna Give you Up' by Rick Astley");
            // Seems like it takes several tries to log the lyrics instead of the exception messege
        }
    }); 