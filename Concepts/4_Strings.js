let name = "  Harsh Naagar  "

console.log(name.trim(''))      //Removes whitspaces from front and end 

let name2 = "Harsh"
console.log(name2.slice(2,5))     // Return elements between 2 index

console.log(name2.replace('Har',"Nar"));    // Replace elemnets

let text = name2.split("")                  // Split text
let reversed = text.reverse()                //reverse text
console.log(typeof text)

let newtext = String(reversed)              // covert to string datatype
console.log(newtext)                                

console.log(newtext.replaceAll(",",""))     // Replace all ","
