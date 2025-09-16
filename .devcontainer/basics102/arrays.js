// let arr=[2,3,4,5,6,6];
// console.log(arr[0]);
// const arrNn=new Array(2,3,4,4,8,7,9);
// arrNn.push(8);
// arrNn.push(9);
// arrNn.pop();
// arrNn.pop();

// console.log(arrNn);

//Copying array

// Shallow Copy & Deep Copy
//Shallow--> share same refferences
//Deep-->do not share same refference

//Shift unShift
// arrNn.unshift(9)
// arrNn.shift();
// console.log(arrNn);

//slice vs splice
/**slice():->
Does NOT change the original array/string.
Returns a new array (or substring, if used on strings).
array.slice(start, end);
string.slice(start, end);
splice():->
Changes (mutates) the original array.
Can add, remove, or replace elements.
Syntax:
array.splice(start, deleteCount, item1, item2, ...)
 */
// const slicearrNn=arrNn.slice(0,3);
// console.log(slicearrNn); //5 index not included

const city = "BangaloreCity";
console.log(city.slice(0,9));

const colors = ["red", "green", "blue", "yellow", "purple"];

console.log(colors.slice(2,4))

// const splicearrNn=arrNn.splice(0,3);
// console.log(splicearrNn);// 5 index included;

let numbers = [100, 200, 300, 400, 500];
let num= numbers.splice(2,2);
console.log(num);

let colorss = ["red", "green", "blue", "yellow"];
colorss.splice(3,0,"pink","black")
console.log(colorss);


let fruits = ["apple", "banana", "mango"];
fruits.splice(1,1,'kiwi')
console.log(fruits);


let arr1 = [1, 2, 3, 4, 5];
arr1.splice(0)
console.log( arr1);
