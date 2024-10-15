// if 
const isUSerloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
}  else {
    console.log("temperature is greater than 50"); // temperature is greater than 50
}


// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if ( score > 100) {
    let power = "arjun"
    console.log(`User power : ${power}`); // User power : arjun
}

// console.log(`User power : ${power}`); // Error


const balance = 1000

if (balance < 500) console.log("test"), console.log("test2"); // this is not good practice

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
} // less than 1200




