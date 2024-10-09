const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// accumulator is used just like sum = 0 or any value in programming lang for purpose of updation
// accumulator is added with currentvalue to assume accumulator = 0 ,currentvalue = 1 ,now accumulator= 1
// acc = 1 , cv = 2 ,acc =3      cv=3  , acc=6
// use use accumulator using remove function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal); // 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // 22996