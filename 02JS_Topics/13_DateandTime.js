// Dates

let myDate = new Date() 
console.log(myDate.toString());   //  Tue Sep 17 2024 17:28:51 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//  Tue Sep 17 2024
console.log(myDate.toLocaleString());//  9/17/2024, 5:28:51 PM
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM

let myTimeStamp = Date.now() // give current time in millisecond  1726594132477

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); //give  time in millisecond of created date = 1726594132477
console.log(Math.floor(Date.now()/1000));// give time in second 

let newDate = new Date()
console.log(newDate); // give date in the format like = 2024-09-17T17:28:52.477Z
console.log(newDate.getMonth() + 1); // give month of date +1 is added as months start from  0 to 11 and when writting in 2 digit format it start from 01 to 12
console.log(newDate.getDay()); // o/p => 2 as it gives day starting from monday i.e 1

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})