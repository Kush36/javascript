// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // Imp to remember about symbols

const JsUser = { // object is made 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // mySym is symbol type
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)// => hitesh@google.com
console.log(JsUser["email"])//=> best method to print o/p hitesh@google.com
console.log(JsUser["full name"])//=> Hitesh Choudhary
console.log(JsUser[mySym]) // mykey1 if written without [] then it is string otherwise symbol type 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) => we can not change anything in JsUser object using freeze
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);/*{
    name: 'Hitesh',
    'full name': 'Hitesh Choudhary',
    age: 18,
    location: 'Jaipur',
    email: 'hitesh@microsoft.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
  }
*/
JsUser.greeting = function(){
    console.log("Hello JS user"); // => Hello JS user
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// =>undefined
}

console.log(JsUser.greeting()); // => Hello JS user, Hitesh
console.log(JsUser.greetingTwo());// => undefined