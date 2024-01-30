let num = 987.780

console.log(Math.round(num))    // Round off

console.log(Math.ceil(num))     // Round off to upper value always 

console.log(Math.floor(num))    // Round of to lower value always


console.log(Math.min(3,45,64,3))            // Returns the lowest value
console.log(Math.max(4,76,34,766,33))       // Returns the greatest value 

console.log(Math.abs(num))                  // Returns absolute value              
console.log(Math.pow(num,4))                // Returns power of a number   eg: 2^4 = 16

console.log(Math.imul(num,2))               // Returns multiplication of two numbers 
console.log(Math.log10(num))                // Returns log with base 10


// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ( RANDOM ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-

console.log(Math.random())                  // Returns random value between 0 to 1

console.log(Math.random() * 10)             // Returns random value between 0 to 10
console.log((Math.random() * 10) + 1)       // Returns random value between 1 to 11

console.log((Math.floor(Math.random() * 10) + 1))       // Returns rounded off random value between 1 to 11


const max = 100
const min = 50

console.log(Math.floor(Math.random() * (max - min + 1) + min))       // Returns value between range max and min



