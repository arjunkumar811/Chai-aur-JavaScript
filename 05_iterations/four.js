// in for operated

const myObject = {
    js: 'javascript',
    cpp: 'java',
    rb: 'ruby',
    swipt: "swipt by apple"
}

for ( const key in myObject ) {
    console.log(`${key} Shotcut is for ${myObject[key]}`);
// js Shotcut is for javascript
// cpp Shotcut is for java
// rb Shotcut is for ruby
// swipt Shotcut is for swipt by apple
    
} 


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }