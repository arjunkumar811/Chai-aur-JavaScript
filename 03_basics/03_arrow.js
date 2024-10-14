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

 const chai = function() {
     let username = "Arjunkumar"
     console.log(this.username);
 } 

 chai()  // undefined

 const chai1 = () => {
     let username = "Arjun"
     console.log(this);
 }

 chai1()  // {}