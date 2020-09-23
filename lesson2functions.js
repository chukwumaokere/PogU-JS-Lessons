//console.log(sum(2,3));

function sum(x, y){
    let first_parameter = x;
    return first_parameter+y;
}

function sub(a,b){
    let result = a-b;
    if(result < 0 ){
         result = 0;
    }
    return result;
}
// let result = Math.pow(a, 3) + Math.pow(b, 2) + c
// let result = a**3 + b**2 + c
// let result = (a*a*a) + (b*b) + c

console.log(sub(1,3));