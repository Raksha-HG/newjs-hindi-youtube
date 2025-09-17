const syn = Symbol("key1");  // creating a unique symbol

// A Symbol is a unique and immutable data type introduced in ES6.
// Every time you create a Symbol, it is guaranteed to be different (even if you give the same description).

const jsUser = {
    name: "raksha",
    "fullname": "rakshaHG",
    [syn]: "key1",           // using symbol as a key [syn] → symbol keys cannot be accessed like a string. You’d have to do:
    age: 21,
    location: "mysuru",
    email: "raksha.g5155@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['monday', 'saturday']
}

console.log(jsUser.email);        // raksha.g5155@gmail.com
console.log(jsUser["fullname"]);  // rakshaHG
    console.log(jsUser["email"]); 
console.log(jsUser[syn]);
console.log(typeof syn) ;
// jsUser.email="raksha@chatgpt.com";   
console.log(jsUser.email);
// Object.freeze(jsUser);
console.log(jsUser.email);
jsUser.email="raksha@chatgpt.com";   
console.log(jsUser.email);

jsUser.greetings=function(){

    console.log(`hello js User,${this.name}`);
}
console.log(jsUser.greetings());