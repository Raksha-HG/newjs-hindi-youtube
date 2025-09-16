const score=40;
console.log(score);
//explicitly mention number datatype

const num=new Number(13498987);
console.log(num);
/* output:
40           
[Number: 100](Prototype function can also be accessed)
*/
console.log(num.toString().length);

//toFixed --> precised value after decimal point

console.log(num.toFixed(2)); //-->100.00

//toPrecise

console.log(num.toPrecision(4));//-->toPrecision(n) formats a number to n significant digits (not decimal places, but total digits).

//toLocaleString
console.log(num.toLocaleString('en-IN'))//-->1,34,98,987


