let date = new Date
console.log(date)
console.log(date.getHours())

console.log(date.toString())        // Returns date as string
console.log(date.getDay())          // Returns day 

console.log(date.toDateString())      // Returns date in understandable format 
console.log(date.getMilliseconds())   // Returns Milisecond

console.log(date.toLocaleString())    // Retruns date in basic everyday use format

console.log(date.toLocaleString("default",{       // Can customize date format
    // dateStyle : "full",
    month : "long",
    day : "2-digit",
    year : "numeric",
    formatMatcher : "best fit"
}))


