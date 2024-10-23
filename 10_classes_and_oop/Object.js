function multiple5(num) {
    return num*5
}

multiple5.power = 2

console.log(multiple5(5)); // 25
console.log(multiple5.power); // 2
console.log(multiple5.prototype); // {}