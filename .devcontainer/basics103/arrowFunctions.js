const user={
    username:"Raksha",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to the course of price ${this.price}`);
        console.log(this)
    }
   
}
//  user.welcomeMessage();
//  user.username="sam";
// user.welcomeMessage();

// function one(){
//     console.log(this);
    
// }

// one();
// const chai=function(){
//     let username="hitesh"
//     console.log(`${this.username}`);
    
// }
// chai();
// const chai=()=>{               //-->> arrow function
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai();

//arrow function

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addtwo(2,3));
 // arrow function without using {}

 const addtwo=(num1,num2)=>(num1+num2);// Inline arrow function;


console.log(addtwo(2,3));