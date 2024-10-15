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
}