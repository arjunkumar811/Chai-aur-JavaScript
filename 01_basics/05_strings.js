const name = "Arjun Kumar"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello Everyone my Name is ${name} and repoCount is ${repoCount}`);
// Hello Everyone my Name is Arjun Kumar and repoCount is 50


const gameName = new String("Arjun Kumar.com")

console.log(gameName.length); // 15
console.log(gameName.toUpperCase()); // ARJUN KUMAR.COM

console.log(gameName.charAt(2)); //j
console.log(gameName.indexOf('K')); // 6

const newString = gameName.substring(0, 4);
console.log(newString); // Arju 

const anotherString = gameName.slice(2, 4)
console.log(anotherString); // ju // InBetween two number or ext..


const newStringOne = "   Arjun   "
console.log(newStringOne.trim()); // Arjun
console.log(newStringOne); // ____Arjun

const url = "https://github.com/%20arjunkumar811?tab=repositories"

// https://github.com/-arjunkumar811?tab=repositories
console.log(url.replace('%20', '-'));

console.log(url.includes('arjunkumar')); // ture

console.log(gameName.split('-')); // [ 'Arjun Kumar.com' ]









