// Some important Datatypes 

// 1. String    ->  characters 
// 2. bigint    ->  Store large integer values
// 3. number    ->  Stores number from -2^53 to 2^53
// 4. null      ->  Empty / It is a standalone value / Its datatype is object
// 5. Boolean   ->  True/Falses
// 6. undefined ->  Empte and it is a datatype on its own
// 7. symbol    ->  use to find unique
// 8. Object    ->  collection of key-value pairs, can be nested

let value = null
console.log(typeof value)

let value2 = undefined
console.log(typeof value2)

// -------------------------------------------------------------------------

//  Data Type Conversion

// String to Number
let data1 = "33" // String
let convert1 = Number(data1)
console.log(typeof convert1) // return number as datatype

// Number to String
let data2 = 33 // Number
let convert2 = String(data2)
console.log(typeof convert2) // returns string as datatype

// String to Number (But with letters)
let data3 = "hello"
let convert3 = Number(data3)
console.log(convert3) // NaN because we cannot convert hello into number

// null to string or number 
console.log(String(null)) // Returns 'Null'
console.log(Number(null)) // Returns 0

