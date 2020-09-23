class Person {    
    name;
    height;
    shoe_size;
    favorite_color;

    constructor(name, age, height, shoe_size, favorite_color){
        this.name = name;
        this.age = age;
        this.height = height;
        this.shoe_size = shoe_size;
        this.favorite_color = favorite_color;
    }

    greeting(){
        return `Hi my name is ${this.name}`;
    }
    jump(){
        return "Oof";
    }
    setprops(name, age, height, shoe_size, favorite_color){
        this.name = name;
        this.age = age;
        this.height = height;
        this.shoe_size = shoe_size;
        this.favorite_color = favorite_color;
    }
}

let John = new Person("John", 22, "tall", 12, "Red");

class Child extends Person {
    dob;
    sex;
    
    constructor(name, age, height, shoe_size, favorite_color, dob, sex){
        super(name, age, height,shoe_size, favorite_color);
        this.dob = dob;
        this.sex = sex;
    }
}

let Jimmy = new Child ('Jimmy', 5, 'short', .5, 'unknown', '2020-09-18', 'Male');
console.log('John is a', John);
//console.log(John.greeting())

console.log('Jimmy is a', Jimmy);