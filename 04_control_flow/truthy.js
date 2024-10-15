const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't");
}


// falsy values
// false, 0, -0, BigInt on, "", null, undefinde, New

// truthy values
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
} // Array is empty


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Object is empty
}

//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1); // 10