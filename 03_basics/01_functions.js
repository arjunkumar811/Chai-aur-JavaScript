 function MyName() {
     console.log("A");  // A
     console.log("R");  // R
    console.log("J");  // J
     console.log("U");  // U
     console.log("N");  // N
 }

// MyName()

 function sum(n1, n2) {
     console.log(n1 + n2);
 }

 sum(1 ,2) // 3


 function sum1(n1, n2) {
 return n1 + n2;
 }

  sum1(2, 3)
  console.log(sum1(2, 3)); // 5


  function loginUserMessage(username = "arjun") {
    if(!username) {
         console.log("Please enter a username");
        return       
    }
     return `${username} just logged in`
 }
 
 console.log(loginUserMessage("Arjun")); // Arjun just logged in

 function calculateCartPrice(val1, val2, ...num1) {
     return num1
 }

 console.log(calculateCartPrice(200, 300, 1234)); // [ 1234 ]



 const user = {
     username: "Arjun",
     followers: 234
 }

 function simga() {
     console.log(`Hi there my username is ${user.username} and followers ${user.followers}`);
    
}

 simga() // Hi there my username is Arjun and followers 234


 handleObject(user)
function handleObject(user) {
    console.log(user.username);  // Arjun
    console.log(user.followers); // 99
}



handleObject({
    username: "Arjun",
    followers: 99
});


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

 console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // 400