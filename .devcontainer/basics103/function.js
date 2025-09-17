function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter user name");
        return;
    }
console.log(`${username},Welcome Aboard!`);

}
// loginUserMessage("Raksha");
 function calcCartPrice(val1,val2,...num1){  //-->rest operator 
    return num1;
 }
console.log(calcCartPrice(200,400,500,2000));

// To pass objects into function

const user={
    username:"Raksha",
    price:199
}
 function HandleObject(anyObject){
console.log(`USER NAME IS ${anyObject.username} AND PRICE IS ${anyObject.price}`);

 }
 HandleObject(user)

 const newArray=[200,400,600,800];

 function takeInput(nArray){
    return nArray[1]

 }
 console.log(takeInput(newArray));
 