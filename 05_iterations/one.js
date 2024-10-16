// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) { 
        console.log("5 is best number"); // 5 is best number  
    }
    console.log(element); // 0 1 2 3 4 5 is best number 6 7 8 9 10
}

// console.log(element); // Out of scope


for (let i=1; i<=10; i++) {
    console.log(`Outer loop value : ${i}`);

    for(let j=1; j<=10; j++) {
    console.log(`Inner loop value : ${j}`);
      console.log(i + '*' + j + ' = ' + i*j);
      
    }
}
 