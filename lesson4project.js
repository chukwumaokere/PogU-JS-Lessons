/* Create an ATM function...
Create an object of person, give the person 5 properties: name, age, shirt_color, fears, wallet_amount
Make name a string with any name
Make age a number of any value
give the person a shirt color 
and make fears and array of 3 or more common phobias
Give the person some money by giving his wallet_amount some value, it can be a decimal

create a function called transaction that accepts 2 parameters
first param = the amount the person is paying
second param = the cost of the item

Using this array of items: 
let items = [];
items['apple'] = 1.25;
items['breakfast_burrito'] = 3.25;
items['red_shirt'] =  5;

Make it so that the person has less than 5 dollars to start with

the transaction function will accept the persons wallet amount in the first param, and the items price in the second param
the function should check if the person has enough money to buy the item, if they do, //console.log "You have purchased {item}" such that {item} is the name of the item purchased console.log("Item purchase");
If they dont the function should return or console.log "You don't have enough funds to purchase this item"

Steps:
1) Initialize the person
2) Define the transaction function
3) Copy paste the array of items 
4) Make the person buy an apple, and set their wallet amount to the remaining amount after they've made the purchase. 
5) Console.log the wallet amount to show that a transaction has been made
6) then attempt to buy the red shirt
7) show that the "You dont have enough..." error gets shown 
8) then Change the value of the persons wallet on a later line of the code by setting the object.property = value; So they have enough money to buy the shirt
9) Then set the color of the shirt of the person using object.property = value to the color of the shirt, if they're able to buy the shirt
*/
/*
we'll create an inventory property later
and then we'll add items to their inventory over time
*/

/*strings are arrays
string functions like toLowerCase
toUpperCase
manipulating strings
*/

/*
check string 
if name == something
can atm deposit
and widthdraw 
else show error
or if !name
enter a name
*/
