class User{
    constructor(username , email){
        this.username = username;
        this.email = email;
    }
    print(){
        console.log(`User Name : ${this.username} Email:${this.email}`);
    }
}

const user1 = new User("John Doe", "john@doe.com");
user1.print()

// --------------------------------------------------------------

class Admin extends User {        //inheritance(new class admin inherited the properties of existing classuser)
    constructor(){
        super("Administrator","admin@private.org")                // calling the parent constructor
    }
}  
const admin = new  Admin();
admin.print();





// EXPLANATION 
//-> User Class in JavaScript

// This JavaScript code defines a class named `User` that represents a user with a username and an email address. It includes a constructor function to initialize a `User` object with the specified username and email, and a `print()` method to display the user's information.

//-> Step-by-Step Explanation:

//-> **Class Definition**:
//    - The `User` class is defined using the `class` keyword.
//    - The constructor function takes two parameters, `username` and `email`, and assigns them to the corresponding properties of the `User` object.
//    - The `print()` method is defined within the class and can be used to display the user's information.

//-> **Creating a User Object**:
//    - An instance of the `User` class is created using the `new` keyword.
//    - The constructor function is called with the arguments "John Doe" and "john@doe.com", which are assigned to the `username` and `email` properties of the `user1` object.

//-> **Calling the print() Method**:
//    - The `print()` method is called on the `user1` object to display its information.
//    - This will output the following to the console:
//      ```
//      User Name : John Doe Email:john@doe.com
//      ``` 