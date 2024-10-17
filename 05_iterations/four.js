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