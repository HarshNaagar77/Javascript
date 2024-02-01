// -> We can easily change the property of a object content that it should be writable , changable etc or not 

const obj1 = {
    name : "Harsh",
    age : 19
}
 
const prop1 = Object.getOwnPropertyDescriptor(obj1 , "name")
console.log(prop1);       // in output we can see that  the property 'name' is enumerable: true and writable: true, configurable: false


//Now we can easily change these properties to false

 Object.defineProperty(obj1 , "name" , {           // Changes the property to false
    writable : false, 
    enumerable : false,         // Enumerable means iteratable (it can not be iterate in for loop now   f)
    configurable : false 
})
const prop2 = Object.getOwnPropertyDescriptor(obj1 , "name")    // calls the new properties 

console.log(prop2)