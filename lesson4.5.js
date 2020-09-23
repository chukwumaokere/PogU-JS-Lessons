let fakeString = "this is an example string";
//john
//maria 

console.log(fakeString.toUpperCase());

//camelCaseOneLowerCaseLetter
//UpperCamelCaseHasACaptialLetter
function greeting(name=null){
    let greetings = ['Hello', 'Hi There', 'Howdy'];
    let randNum = Math.floor(Math.random() * greetings.length);
    let salString = greetings[randNum] + ', ' + name[0].toUpperCase() + name.slice(1); 
    return salString;
}
console.log(greeting('maria'))
/* Objectives
1) Return a string of a random greeting + users name
2) The first letter of the string should always be capitalized
*/