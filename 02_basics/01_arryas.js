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

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);

