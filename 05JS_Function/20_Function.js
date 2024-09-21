
function calculateCartPrice(val1, val2, ...num1){ //  ... => rest operator used for storing multiple values in array
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // o/p => [ 500, 2000 ] 200 is assign to val1 and same 400 to val2

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is sam and price is 399 
}

// handleObject(user)   // changing values in the function 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));// => 400
console.log(returnSecondValue([200, 400, 500, 1000])); // =>  400