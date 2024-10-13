const gods = ["Shiva", "ganesh", "hanuman"]
const family = ["me", "mom", "papa", "sis"]

gods.push(family)
console.log(gods);

console.log(gods[3][1]); // mom

// const allGods = [...gods,...family];
// console.log(allGods);
// // [
//     'Shiva',
//     'ganesh',
//     'hanuman',
//     [ 'me', 'mom', 'papa', 'sis' ],
//     'me',
//     'mom',
//     'papa',
//     'sis'
//   ]

allGods = gods.concat(family)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Arjun")) // false
console.log(Array.from("Arjun")) // [ 'A', 'r', 'j', 'u', 'n' ]
console.log(Array.from({name: "Arjun"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]