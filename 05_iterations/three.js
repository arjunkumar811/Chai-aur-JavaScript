// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 3, ,4 ,5]
for (const num of arr) {
    console.log(num); // 1, 2, 3, undifined 4, 5
    
}