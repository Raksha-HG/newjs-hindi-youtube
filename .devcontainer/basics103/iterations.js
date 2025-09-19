
for(let index=0;index<10;index++){
    // const element =index;
    // console.log(element);
    console.log(`outer loop ${index}`);
    
    for(let j=0;j<10;j++){
       console.log(`inner loop value  ${j} and inner loop ${index}`);
    }
    
}
let myArray=['flash','superman','batman'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}

//break and continue

for (let index = 1; index <=20 ; index++) {
    if(index==5){
        console.log("5 DETECTED");
       continue;
        
    }
    console.log(`value of i is ${index}`);
    
    
}


