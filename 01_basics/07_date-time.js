// dates

 let myDate = new Date()
// console.log(myDate); // 2024-10-13T15:35:08.010Z
// console.log(myDate.toString()); // Sun Oct 13 2024 15:35:08 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); // 10/13/2024, 3:37:44 PM
// console.log(typeof myDate); // object



 let myCreateDate = new Date(2023, 0, 23)
 console.log(myCreateDate); //2023-01-23T00:00:00.000Z 

 let myCreateDate1 = new Date(2023, 0, 23, 5, 3)
 console.log(myCreateDate1); // 2023-01-23T05:03:00.000Z

 let myCreateDate2 = new Date("2023-01-14")
 console.log(myCreateDate2); // 2023-01-14T00:00:00.000Z

 let myCreateDate3 = new Date("01-14-2023")
 console.log(myCreateDate3); // 2023-01-14T00:00:00.000Z

 console.log(myCreateDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM



let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1728834824435
console.log(myCreateDate.getTime()); // 1674432000000
console.log(Math.floor(Date.now()/1000)); // 1728835145




