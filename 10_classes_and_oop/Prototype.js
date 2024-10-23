// let myName = "Arjun     "
// let mySchool = "SBR     "

// console.log(myName.trueLength); // Undefined


// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }


// Object.prototype.arjun = function(){
//     console.log(`Arjun is present in all objects`);
    
// }

// Array.prototype.heyArjun = function(){
//     console.log(`Arjun says hello`);
    
// }

// heroPower.arjun() // Arjun is present in all objects
// myHeros.arjun() // Arjun is present in all objects
// myHeros.heyArjun() // Arjun says hello
// // heroPower.heyArjun()



/// Inheritance

const User = {
    name: "Arjun",
    email: "Kumararjun264912gmail.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// morden syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // ChaiAurCode
    console.log(`True length is: ${this.trim().length}`); // True length is: 11
}

anotherUsername.trueLength() // True length is: 11
"hitesh".trueLength() // True length is: 6
"iceTea".trueLength() // True length is: 6