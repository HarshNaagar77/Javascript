// -> Declaring a function 

function fun1(a,b){
    sum =  a + b 
    console.log(sum)
}
fun1(99,100)

// -> Declaring a function with unlimited parameters and arguements

function fun2(...num){
    // return num
    console.log(num)  
}
fun2(1203,2343,244,5748,7483)           // Returns array of all numbers 

// -> Accesing a object using function 

let obj = {
    name : "John",
    age: 30,
    city: "New York"
}
function objaccess(user){
    console.log(`Name is ${user.name}`);     // Accessing the key of object
}
objaccess(obj)                             // give object as arguement 


// -> Accessing an array with function 

let arr = [200,300,400,500,600]
function arrAccess(index){
    console.log(index[1])
}
arrAccess(arr)