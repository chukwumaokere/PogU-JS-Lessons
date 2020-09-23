/*
class User {
    email;
    display_name;
    dob;
    followed_channels = [];
    subscribed_channels = [];

    login(){

    }
    logout(){

    }
    subscribe(){

    }
    unsubscribe(){

    }
    changePass(){

    }
    like(){

    }
    saveCard({cardDetails}){

    }
    transaction({savedCardDetails}, product){
        let name = cardDetails.name;
        let number = cardDetails.number;
        
    }
}


let cardDetails = {
    card_number: 74893274893274923,
    exp_date: "08/22",
    cvv: 332,
    name: "Chuck Okere",
    card_type: "AMEX"
}

let user = new User(asjdijasdasdjaoisd)

user.saveCard(cardDetails);

*/
/*
class Animal {
    species;
    color;
    limbs;
    constructor(species, color, limbs){
        this.species = species;
        this.color = color;
        this.limbs = limbs;
    }
    speak(){
        console.log(`${this.species} makes a noise`);
    }
    get(prop){
        return this[prop];
    }
    set(props, value){
        this[props] = value;
    }
}

let Tiger = new Animal('Tiger', "Orange", 4);

//Tiger.color = "XX";
//console(Tiger.color);
Tiger.set('color', 'Yellow');

let tigersColor = Tiger.get('color');
console.log(tigersColor)
*/

class Car {
    model;
    brand;
    year;
    wheels;
    color;
    constructor(brand,model,year,wheels,color){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.wheels = wheels;
        this.color = color;
    }
    makeNoise(){
        return "Vroom vroom";
    }
    getColor(){
        return this.color;
    }
}

//let courtneysCar = new Car('Toyota', 'Corolla', 2013, 4, "silver");
//courtneysCar.color = "Grey"

//console.log("Courtneys car is a", courtneysCar);

class Convertible extends Car {
    doors;
    engine;
    constructor(brand,model,year,wheels,color,doors, engine){
        super(brand,model,year,wheels,color);
        this.doors = doors;
        this.engine = engine;
        //super.makeNoise();
    }

    getColor(){
        return this.color;
        // return super.getColor();
    }
}

let courtneysCar = new Convertible('Chevrolet', 'Corvette', 1974, 4, 'Blue', 2, 'V8');

console.log(courtneysCar.makeNoise());