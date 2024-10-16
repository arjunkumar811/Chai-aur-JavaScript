// // for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) { 
        console.log("5 is best number"); // 5 is best number  
    }
    console.log(element); // 0 1 2 3 4 5 is best number 6 7 8 9 10
}

// // console.log(element); // Out of scope


for (let i=1; i<=10; i++) {
    console.log(`Outer loop value : ${i}`);

    for(let j=1; j<=10; j++) {
    console.log(`Inner loop value : ${j}`);
      console.log(i + '*' + j + ' = ' + i*j);
      
    }
}
 

let myArray = ["yash", "druve", "rokey"]
console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // yash druve rokey
}


// break and continue 

for (let i=1; i<=20; i++) {
    if(i == 5) {
        console.log(`Detected 5`); // Detected 5
       break
    }
    console.log(`value is : ${i}`);
}


// continue

for (let i=1; i<=20; i++) {
    if (i == 5) {
        console.log(`Detected 5`); // Detected 5
        continue
    }
    console.log(`Value of i is ${i}`);
    
}