const course = {
    coursename: "javascript ",
    price: "999",
    courseInstructor: "Kushagra"
}

// course.courseInstructor
const {coursename:Js} = course; // best way to define keys of objects for repetative calling 
const {courseInstructor: instructor} = course
console.log(Js);//javascript 
// console.log(courseInstructor);
console.log(instructor); //Kushagra

// {
//     "name": "hitesh",
//     "coursename": "js in hindi", //JSON Format
//     "price": "free"
// }

[
    {},
    {},// Type of JSON(Java Script Object notation) Format
    {}
]
