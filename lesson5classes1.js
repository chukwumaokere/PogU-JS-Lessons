class Person { 
    name;
    age;
    inventory;
    wallet;
    constructor(name, age, inventory, wallet){
        this.name = name;
        this.age = age;
        this.inventory = inventory;
        this.wallet = wallet;
    }
    greet(){
        return "Hello, my name is " + this.name;
    }
    buyItem(item){
        let itemName = item[0]
        let itemPrice = item[1]
        if(itemPrice<=this.wallet){
            this.wallet = this.wallet-itemPrice
            console.log("Thank you for your purchase!")
            console.log("You now have " + this.wallet + " remaining.")
            this.storeItem(itemName)
        }else{
            console.log("You don't have enough funds to purchase this item.")
        }
    }
    storeItem(item){
        this.inventory.push(item)
        console.log(this.inventory)
    }
    tradeItem(){

    }
    giveItem(item, person){
        if(this.inventory.includes(item)){

        }else{
            console.log("You cant give this item, you dont own it")
        }
    }
}

let Johnny = new Person('Johnny', 24, [], 500);
let Mary = new Person("Mary", 6, [], 10);

//console.log(Johnny.greet());

/* Create an Animal class with some properties that animals typically share) */
/* Create 2 unique animals using your class */
/*
Object.keys(objectName)[0] // to get the key of first element of object
Array
String
*/
/*
let items = [];
items['apple'] = 1.99;
items['burrito'] = 5;
items['red_shirt'] = 10;
*/

let items = [
    ['apple', 1.99],
    ['burrito', 5],
    ['red_shirt', 10]
];

buyItem(item[0]);

function tradeItem([item1, person1], [item2, person2]){
    //the rest of the code
}

function tradeItem(trade1, trade2){
    let person1 = trade1[1];
    let item1 = trade1[0];
    let person2 = trade2[1];
    let item2 = trade2[0];
}

tradeItem([Mary, 'apple'], [Johnny, 'burrito']);
console.log(Mary)
console.log(Johnny)
//console.log(Object.keys(items)[0]);

/* Animal class
1) write an animal class with props: species, color, limbs, location, hp
2) Create 2 unique animals and console.log them to show that they have their properties set
3) Create a tiger Object (instance of a class) with props: "Tiger", "Orange", 4, "Pen 1", 250
4) Create an elephant object (instance of a class) with props: "Elephant", "Grey", 4, "Pen 2", 100
5) Create a method within those classes named "attack", which will take 2 parameters, the first parameter being the animal that is DOING the attacking, the second parameter will be the animal BEING attacked
6) The attack method should check if the HP of the animal being attacked is greater than 0 (you can't attack dead animals. Well you can but we wont be beating the dead horse)
7) The damage from an attack from a tiger will be between 10-20 
8) The damage from an elephant attack will be between 5-10
9) After the attack, console.log each animal after 1 attack each to each other (tiger attacks elephant, then elephant attacks tiger)
10) Create a method within those classes named "moveAnimal", which will take 2 parameters: the animal being moved, and the new Pen location as a string.
11) Move the tiger from Pen 1 to Pen 4
12) Move the elephant from Pen 2 to Pen 3
*/