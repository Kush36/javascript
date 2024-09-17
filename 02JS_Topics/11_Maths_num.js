const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); // O/P=>[Number: 100]

console.log(balance.toString().length);// It will tell about the length of balance ex = 3
console.log(balance.toFixed(1)); // it will print upto 1 decimal place ex=100.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // it will print from left to right upto 4 digits 
//with rounding off ex = 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocalString('en-IN') print in indian counting ex = 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); give +ive output wheather it is +ive or -ive
// console.log(Math.round(4.6)); round off karta hai 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//give random number between [0,1]
console.log((Math.random()*10) + 1);//give number >=1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// iMP formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min)//number should be >min