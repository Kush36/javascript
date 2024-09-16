
const name = "Kushagra Mishra"
const repoCount = 101

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`Hello my name is ${name} and my friennd is not ${repoCount}`);


const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);//h
console.log(gameName.__proto__);
// {}

console.log(gameName.length); //13 =>give length of a string 
console.log(gameName.toUpperCase());//HITESH-HC-COM => convert lowercase into uppercase in string
console.log(gameName.charAt(2));//t => gives character at entered (index) 
console.log(gameName.indexOf('t'));//2 => gives indexOf
const newString = gameName.substring(0, 4)  
console.log(newString); //hite => 0 is included while 4 is excluded in answer we get 

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // used for printing from back to start

const newStringOne = "   Kushagra   "
console.log(newStringOne);
console.log(newStringOne.trim());// space can be removed using trim() function

const url = "https://Kushagra.com/Kushagra%20choudhary"

console.log(url.replace('%20', '-')) // replace first value given in replace from last 

console.log(url.includes('sundar')) // check weather it is is present or not 

console.log(gameName.split('-'));// split all words like this [ 'hitesh', 'hc', 'com' ]
