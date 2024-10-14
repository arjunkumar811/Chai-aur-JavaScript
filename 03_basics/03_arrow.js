// const user = {
//     username: "Arjun",
//     password: 123123,


//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

//  console.log(this);

//  function chai(){
//      let username = "hitesh"
//      console.log(this.username);
//  }

// chai()

//  const chai = function() {
//      let username = "Arjunkumar"
//      console.log(this.username);
//  } 

//  chai()  // undefined

 const chai = () => {
     let username = "Arjun"
     console.log(username);
 }

 chai()  //  Arjun

const twoNum = (n1, n2) => {
  return n1 + n2
}

const result = twoNum(1, 2);
console.log(result); // 3


const sum = (n1, n2) => (n1 + n2)
console.log(sum(1, 3)); // 4


const myArray = [2, 5, 3, 7, 8];

myArray.forEach(function(element) {
    console.log(element);
});


