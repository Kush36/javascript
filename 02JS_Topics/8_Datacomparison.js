// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false => AS null is converted into number then condition is checked
console.log(null == 0);//false => AS null is converted into number as it is equality operator then condition is checked
console.log(null >= 0);//true => AS null is converted into number(0) then condition is checked

console.log(undefined == 0);//fāl̥sē => as undefined is not converted into number then condition is checked
console.log(undefined > 0);;//fāl̥sē => as undefined is not converted into number then condition is checked
console.log(undefined < 0);;//fāl̥sē => as undefined is not converted into number then condition is checked

// === 

console.log("2" === 2);;//fāl̥sē => as equality operator cannot be compared with other datatype 