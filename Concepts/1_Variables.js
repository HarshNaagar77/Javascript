const number = 9311857195
var name = "HARSH"
let surname = "NAAGAR"

name = "harsh"
surname = "naagar"
console.log(name)                           // Displays one variable at a time
console.log(number,name,surname)            // Displays multiple variables at a time



// Const -> Can not be overwrite 

// Var -> 1. Can be overwrite but if there are more than one varibale of same name it overwrites all
//        2. Issue of block scope and functional scope occurs 

// Let -> 1. Can be overwrite but do not overwrite all
//        2. In modern js we use let to make code more efficient
//        3. Has block scope i.e., It is only valid in the block where it is