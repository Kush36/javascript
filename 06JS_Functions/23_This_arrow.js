// const user = {
//     username: "Kushagra",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`); // this refer to the current context  
//         console.log(this); /*
//          o/p => 
//              {
//             username: 'Kushagra',
//             price: 999,
//             welcomeMessage: [Function: welcomeMessage]
//           }
//           Mishra ji,welcome to website
//           {
//             username: 'Mishra ji',
//             price: 999,
//             welcomeMessage: [Function: welcomeMessage]
//           }  */
        
//     }
// }
// user.welcomeMessage() //Kushagra,welcome to website
// user.username = "Mishra ji" // context changes of username
// user.welcomeMessage() //Mishra ji,welcome to website
// console.log(this); // O/p => {} due to local variable as we are in node enviroment 
// // if you run above line on console window (browser)you will get the O/P => window 
// // window object is a global object in console window (browser) this is the biggest library of defined functions(events) like  click,formsubmit ,alert,blur,close,etc 
// /*No, you cannot print something using this inside an arrow function in the way you might with a regular function.
//  This is because arrow functions do not have their own this.
//  Instead, they inherit this from the surrounding lexical context (the scope in which the arrow function is defined).
//  Arrow Function: Implicit return in one-liners (no need for the return keyword if the function body is a single expression).
//  const double = (x) => x * 2; // Implicit return
// */
// function chai(){
//   let username = "hitesh"
//   console.log(this.username); //undefined
  
// }

// chai() 
/* 
O/P => of printing console.log(this);
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/
const chai = () => {
  let username = "hitesh"
  console.log(this.username); 
  
}
chai() // uundefined 

// const chai =  () => {
//    let username = "hitesh" //o/p->{}
//    console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  //o/p->7 explicitly return 
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )//o/p->7 implicitly return 
// const addTwo = (num1, num2) => ({username: "hitesh"}) //{ username: 'hitesh' }


// console.log(addTwo(3, 4))
