var people = ['person1', 'person2', 'person3', 'person4', 'person5'];
var a = people;
var b = people;

var rand = Math.floor(Math.random() * (a.length - 1)) + 1;

var c = a.map(function (e, i) {
    var l = (i + rand) % a.length ;
    return [a[i], b[l]];
});

console.log(c);