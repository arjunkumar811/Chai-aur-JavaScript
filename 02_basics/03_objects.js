// singleton

// Object.create

// Object Literals

const mySym = Symbol("key")

const JsUser = {
    email : "kumararrjun@26401@gmail.com",
    name : "Arjun",
    [mySym] : "mykey1",
    age : 18,
}

console.log(JsUser.email); // kumararrjun@26401@gmail.com
console.log(JsUser["email"]); // kumararrjun@26401@gmail.com
console.log(JsUser[mySym]); // mykey1

// Update
JsUser.email = "kumararjun@gmail.com"
 // Object.freeze(JsUser)

 JsUser.greeting = function(){
    console.log("Hello Js user"); 
 }

 JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`); 
 }

 console.log(JsUser.greeting()); // Hello Js user
 console.log(JsUser.greetingTwo()); // // Hello Js user, Arjun
 
 

