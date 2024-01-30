// -> setTimeout
// It is used to do any task after some amount of time .
// It does the task only once after the given time 

let printName = setTimeout(() => {
    console.log("Hello Harsh")          // Prints "Hello Harsh" after 3 second dalay
}, 3000);


// -> SetInterval 
// It is used to perform any action repeatedly after a specific period .
// The actions keep on happening again and again after every given time .

let printCountry = setInterval(() => {
    console.log("India")                   // Prints "India" continuously after each 1 second interval
}, 1000);


// -> clearTimeout
// It is used to stop or clear the timeout function if it is not executed yet .

clearTimeout(printName)                // Stops the execution of printName (i.e., stops printing Hello Harsh)


// -> clearInterval
// It is used to stop or clear the interval function if it is running .

clearInterval(printCountry)            // Stops the continuous printing of India


// -> These all can be used with DOM 