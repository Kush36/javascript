const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); //used to access array inside array element => flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman','flash','batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // perform concatenation of two arrays in 1 array

console.log(all_new_heros);// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ], 'superman','flash','batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // make all array into single array
console.log(real_another_array);// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Hitesh"))//isArray tells weather it is array or not =>false
console.log(Array.from("Hitesh"))//it convert input into array i.e => [ 'H', 'i', 't', 'e', 's', 'h' ] 
console.log(Array.from({name: "hitesh"})) // interesting =>[] as conversion into array is not possible due multiple datatypes 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// it is used to convert input into array [ 100, 200, 300 ]