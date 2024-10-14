// var c = 300

let a = 300
if (true) {
    let a = 10
   // const b = 20
    console.log("INNER: ", a); // INNER:  10 Inner Scope
}

console.log(a); // 300
//console.log(b); // error
console.log(c); // 300


