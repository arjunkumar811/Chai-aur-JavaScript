// function MyName() {
//     console.log("A");  // A
//     console.log("R");  // R
//     console.log("J");  // J
//     console.log("U");  // U
//     console.log("N");  // N
// }

// MyName()

// function sum(n1, n2) {
//     console.log(n1 + n2);
// }

// sum(1 ,2) // 3


// function sum1(n1, n2) {
// return n1 + n2;
// }

// sum1(2, 3)
// console.log(sum1(2, 3)); // 5


function loginUserMessage(username = "arjun") {
    if(!username) {
        console.log("Please enter a username");
       return       
    }
    return `${username} just logged in`
}
 
console.log(loginUserMessage("Arjun")); // Arjun just logged in
