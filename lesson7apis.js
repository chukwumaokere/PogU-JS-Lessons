/*
class User {
    cart = [];

    addItem(item){
        this.cart.push(item);
    }
    removeItem(item){
        this.cart.splice(item, 1);
    }
    purchase(cart, payment_method){
        //fetch //submit an order
    }
    loadUserInfo(){
        //fetch
    }
} */
const https = require('https');
const http = require('http');

let result = https.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2", function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});

//console.log(result);
