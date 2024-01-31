// -> Constructor 
// New Keyword => it is used to make a new instance of a  class. It creates an empty object and calls the constructor method on that newly created object.

function user(name,age){
    this.name = name;           // this is used to point at current instance 
    this.age = age;
}                      // In this case it assign first name  as a property of the object and second name as value

const first = new user("harsh", 90)     // New keyword helps to make new instance of  the function/class
console.log(first.name);     

