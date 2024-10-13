// Primitive

// 7 types : String, Number, Boolean, null, undifined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false


const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Function


const heros = ["Arjun", "kumar", "bassu"];
let myObj = {
    name: "Arjun",
    age: 20,
}

const myFunction = function(){
    console.log("Hi There");
}

myFunction(); // Hi There
console.log(typeof anotherId); // symbol
