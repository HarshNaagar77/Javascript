// -> OBJECT LITERALS 

let obj1 = {                            // Declaring object 
    name : "Harsh ",
    id : 112,
    city : "Delhi",
    Country : "India"
}

console.log(obj1.name)                  // Access value by method 1
console.log(obj1["id"])                 // Access value by method 2

obj1.surName = "Naagar"             // Adding new property to the existing object
console.log(obj1.surName);

console.log(obj1)                   // printing object

let mysym = Symbol("key1")                // creating a symbol datatype
obj1[mysym] = 90                          // Adding symbol to object
console.log(obj1)

console.log(typeof obj1[mysym])         // Accessing the symbol datatype in object 

console.log(`Hello Mr. ${obj1.name}${obj1.surName}`)        // Aceesing keys of object 

Object.freeze(obj1)                         // Freezes object and no changes can be made in it 
obj1.name = "HEHE"                          // will not work beacuse object is freezed 
console.log(obj1)


// -> OBJECT NESTING

let info = {
    studentinfo : {
        Name: "Harsh",
        Age: 23,
        address : {
            city : "Delhi"
        }
    }
}

console.log(info.studentinfo.address.city)      // access object in a object

// -> Object merging

let Marvel = {
    hero : "Ironman",
    hero2 : "Thor"
}

let Dc = {
    hero3 : "Superman",
    hero4 : "Batman"
}

let merge = {...Marvel , ...Dc}
console.log(merge)

// -> DECLARING OBJECT USING CONSTRUCTOR 

let students = new Object()
students.name ="John Doe"
students.age=35
console.log(students)

// -> SOME OPERATIONS ON OBJECT 

console.log(Object.keys(students))          // Returns keys of an object in form of array
console.log(Object.values(students))        // Returns Values of an object in form of array

// -> Ascessing objects in an array 

let array = [
    {
        name : "Harsh",
        surName : "Naagar"
    },
    {
        name : "Harsh",
        surName : "Naagar"
    },
    {
        name : "Harsh",
        surName : "Naagar"
    }
]

console.log(array[1].name)          // Returns the name value of position 1 in array