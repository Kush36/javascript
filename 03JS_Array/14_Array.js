// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // o/p => 1

// Array methods

myArr.push(6) // myarr push num  6 
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6]
myArr.push(7) // myarr push num  7 
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6,7]
myArr.pop() // pop one numm from aaray
console.log(myArr);//  [ 0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9)//  [9, 0, 1, 2, 3, 4, 5, 6] add element inside it to start
console.log(myArr);
myArr.shift() // shift all elements to left such that 1st element removed 
console.log(myArr);// [ 0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9));// tell presence of entered element 
console.log(myArr.indexOf(3));// indexof given array

const newArr = myArr.join()// convert in string form 

console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6]
console.log( newArr);//   0, 1, 2, 3, 4, 5, 6


// slice, splice

console.log("A ", myArr); // A [ 0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3) // slice print part of array including 1st position and excluding last one without change in original array 

console.log(myn1);//  [ 1, 2]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5, 6]


const myn2 = myArr.splice(1, 3) //slice print part of array including 1st position as well as last one and  change  in original array 
console.log("C ", myArr);// C [ 0, 1, 2, 3, 4, 5, 6]
console.log(myn2);//[ 1, 2, 3]