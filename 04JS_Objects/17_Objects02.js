// const tinderUser = new Object() // this obj is singleton type 
const tinderUser = {} //this obj is non-singleton type 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {      // regularUser is object and email is its key while some@gmail.com is value of obj
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);// Accessing keys and values in obj => hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // method to print obj in single array form => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} //split method like brokening of glass on the floor
console.log(obj3); //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));// All keys of obj => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));// All values of obj => [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));// All entries in matrix format =>[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true to check property of keys we use hasOwnProperty()


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // used to store values in keys of obj

// console.log(courseInstructor); //courseInstructor is not defined
console.log(instructor); // => hitesh

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]