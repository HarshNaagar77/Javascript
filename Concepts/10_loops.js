// -> USING FOR LOOP
let greet = "Hello"
for(  i=0;i < greet.length;i++){
    console.log(greet[i])  //prints each character of the string one by one
}

// -> USING FOR..OF LOOP
// used in array , strings 

let arr = [23,45,32,34,23,2]
for (const i of arr) {
    console.log(i)          // Prints each character of array
}