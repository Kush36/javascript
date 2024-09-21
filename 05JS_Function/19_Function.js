
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
/*
H
I
T
E
S
H
*/

sayMyName() // sayMyName is referrence  while () => is execusion of function


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers() // o/p => NaN as () does not contain any parameter

function addTwoNumbers(number1, number2){  // addTwoNumbers is referrence  while () => is execusion of function
    //  console.log(number1 + number2); // M-1  =>8
    // let result = number1 + number2 // anything given below return statement does not print but work above it 
    // return result   // if you will not define result and printing result it will show undefined
       return number1+number2 // above two line work in 1 line
}
// addTwoNumbers(3,5) //   M-1
const result = addTwoNumbers(3, 5) 

console.log("Result: ", result); // Result:  8


function loginUserMessage(username = "sam"){  // line 39 Username is parameter works only when no other parameter is their in below console function
    if(!username){     // if(username === undefined) 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` 
}

console.log(loginUserMessage("Kush")) // => Kush just logged in
 // if you do not pass any string it returnn undefined 
console.log(loginUserMessage()) // output => sam just logged in // if username is 39 o/p => PLease enter a username undefined
