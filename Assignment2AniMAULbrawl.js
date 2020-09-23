/* Animal class
1) write an animal class with props: species, color, limbs, location, hp
2) Create 2 unique animals and console.log them to show that they have their properties set
3) Create a tiger Object (instance of a class) with props: "Tiger", "Orange", 4, "Pen 1", 250
4) Create an elephant object (instance of a class) with props: "Elephant", "Grey", 4, "Pen 2", 400
5) Create a method within those classes named "attack", which will take 2 parameters, the first parameter being the animal that is DOING the attacking, the second parameter will be the animal BEING attacked
6) The attack method should check if the HP of the animal being attacked is greater than 0 (you can't attack dead animals. Well you can but we wont be beating the dead horse)
7) The damage from an attack from a tiger will be between 10-20 
8) The damage from an elephant attack will be between 5-10
9) After the attack, console.log each animal after 1 attack each to each other (tiger attacks elephant, then elephant attacks tiger)
10) Create a method within those classes named "moveAnimal", which will take 2 parameters: the animal being moved, and the new Pen location as a string.
11) Move the tiger from Pen 1 to Pen 4
12) Move the elephant from Pen 2 to Pen 3
*/


class Animal {
    species;
    color;
    limbs;
    location;
    hp;
    atk_pts;
    constructor(species, color, limbs, location, hp, atk_pts){
        this.species = species;
        this.color = color;
        this.limbs = limbs;
        this.location = location;
        this.hp = hp;
        this.atk_pts = atk_pts;
    }

    moveAnimal(newHome){
        //let oldHome = this.location.indexOf(this.location)
        if(this.location == newHome){
            return console.log("Please enter a new location.");
        }else{
            this.location = newHome
            console.log(this.species + " has been moved to the " + this.location)
        }
    }
    
}

let strongAtk = randomNumber(10, 20); //Random number between 10-20, including 20
let weakAtk = randomNumber(5,10); //Random number between 5-10, including 10
console.log("weakAtk Is:", weakAtk, strongAtk);
//let tiger = new Animal('Tiger','Orange', 4, 'Jungle Exhibit', 250, strongAtk);
//let elephant = new Animal('Elephant', 'Gray', 4, 'Savannah Exhibit', 400, weakAtk);
/*
function attack(attacker, prey){
    if(prey.hp > 0){
        prey.hp = prey.hp-attacker.atk_pts;
        console.log(attacker.atk_pts + " damage to " + prey.species);
        console.log(prey.species + ": " + prey.hp + " HP remaining");
    }else{
        return null;
    }
    return console.log(" ");

}
*/
/*
function move(animal, location){
    animal.location = location;
}
*/
/*
console.log(tiger);
move(tiger, "Pen 3")
console.log(tiger);
*/
// console.log(tiger);
// console.log(elephant);

 //console.log(strongAtk);
 
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
/*
 console.log("ROUND 1");
 attack(tiger,elephant);
 attack(elephant, tiger);
 console.log(" ");
 console.log("TIGER: "+tiger.hp, "ELEPHANT: "+elephant.hp);
 console.log(" ");
 console.log("ROUND 2");
 attack(tiger,elephant);
 attack(elephant, tiger);
 console.log(" ");
 console.log("TIGER: "+tiger.hp, "ELEPHANT: "+elephant.hp);
 */
/*
console.log(tiger.location);
tiger.moveAnimal("Arctic Exhibit");
console.log(tiger.location);
console.log(" ");
console.log(elephant.location);
elephant.moveAnimal("Mars Exhibit");
console.log(elephant.location);
*/