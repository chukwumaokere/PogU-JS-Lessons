let items = [];
items['apple'] = 1.99;
items['burrito'] = 5;
items['red_shirt'] = 10;

let person = {
    name: 'john',
    age: 24,
    height: 'tall',
    shoe_size: 12,
    inventory: ['wallet', 'apple', 'loose change'],
    wallet_amt: 500
}

function transaction(cost,person){ // Person 
    let message;
    let { name, age, height, shoe_size, inventory, wallet_amt } = person;
    if(cost<=payment){
        message = "Thank you for your purchase!";
        person.wallet_amt[0] = payment -= cost; // This line here is hardcoded
        return message
    }else{
    message = `Sorry, ${payment} dollars is not enough to purchase this item.`; 
    //${varName} adds values to strings w/out concat;
    }
    return message
}

let t1 = transaction(items['apple'], person);
console.log(t1);
