// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["my", "father"]

const  myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2); // [ 1, 2, 3, 4 ]


// Array methods

myArr.push(6)
myArr.pop()
myArr.push(7)

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3));  // 3

const newArr = myArr.join()

// console.log(myArr); // [
//     0, 1, 2, 3,
//     4, 5, 7
//   ]
console.log( newArr);

// slice, splice

// console.log("A ", myArr); // A  [
//     0, 1, 2, 3,
//     4, 5, 7
//   ]

const my1 = myArr.slice(1, 3)

console.log(my1); // [ 1, 2 ]

console.log("B", myArr);


const my2 = myArr.splice(1, 3)
console.log("C ", myArr);
// console.log(my2); // C  [ 0, 4, 5, 7 ]
// [ 1, 2, 3 ]

// The splice methord manupulate the array









