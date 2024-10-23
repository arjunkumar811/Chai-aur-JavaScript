// const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach((item)=> {
//     // console.log(item);
//       return item;
// })


const myName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myName.filter((num)=> {
    return num > 4
})

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
