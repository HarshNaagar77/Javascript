// 1. we can easily create any method of our own using .prototype which can do our assigned work 
// 2. when a method is created on object using object.prototype , it get applied on all instances like array ,string ,object etc.
// 3. When a method is created on only array , string etc it is only applied on these not on every instances. 

let obj1 = {
    name : "John",
    age:25,
}

Object.prototype.harsh = function(){
    return this.name + ' is '+this.age+' years old' ;
}
console.log(obj1.harsh());          // method named harsh() is made for the object 


let arr = [12,32,43,9,78]
Array.prototype.naagar = function(){
    let sum=0;
    for (let i in this)   // looping through each element of array and adding it to sum variable
        if(!isNaN(this[i]))     // checking whether current element is a number or not  
        sum += this[i];      // if yes t  hen add that number to sum
    return sum;             // returning the final value of sum
}
console.log(arr.naagar())           //  calling the new method naagar() on an array



// -> INHERITENCE
// properties of one class , object , function can be inherited by other 

let add = {
    x : 10,
    y : 20,
    addIt : function () {
        return this.x + this.y;
    },
}

let sub = {
    subIt : function(){
        return this.x - this.y
    }
}

Object.setPrototypeOf(add , sub)
console.log(add.subIt())
console.log(add.addIt())

