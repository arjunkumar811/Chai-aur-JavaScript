for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 3, ,4 ,5]
for (const num of arr) {
    console.log(num); // 1, 2, 3, undifined 4, 5
    
}

const greeting = "Hello Arjun!"
for (const greet of greeting) {
    console.log(`Ecah char is ${greet}`);
}

Maps 
const map = new Map() 
map.set('IN', "india")
map.set('USA', "United Sates of America")
map.set('FR', "France")


console.log(map); 

Map(3) {
    'IN' => 'india',
    'USA' => 'United Sates of America',
    'FR' => 'France'
  }

const myObject = {
    gmail : "kumararjun26401@gmail.com",
    gmail1 : "kumar@gmail.com"
}

for ( const [key, value] of myObject ) {
    console.log(key, ":-", value);
    
}
