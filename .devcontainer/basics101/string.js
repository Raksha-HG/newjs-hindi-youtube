//concatenation

const name="Raksha";
const value=50;
 console.log(name +value +" value");

 //placeholders---> using Backticks(`)

console.log(`My name is ${name} bought book of value ${value}`);

//declaring String as an object

const str=new String('StrangerThings');
console.log(str[0]);
console.log(str.__proto__);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(6));
console.log(str.indexOf('S'));
//substring
const newString= str.substring(0,4);
console.log(newString);
//slice
/*const str = "StrangerThings"; // length = 14
str.slice(4);      // "ngerThings"   (from index 4 → end)
str.slice(-4);     // "ings"         (last 4 chars)
str.slice(0, 4);   // "Stra"         (from 0 → 3)
str.slice(4, 9);   // "ngerT"        (from 4 → 8)
str.slice(4, -2);  // "ngerThin"     (from 4 → length-2)
str.slice(-8, -2); // "gerThi"       (from 8th last → 2nd last)
str.slice(4, -14); // ""             (empty, end < start)
Start at start, stop just before end. If end < start, you get an empty string. Negative values count from the end.
 */
const sliceString=str.slice(4,9);
console.log(sliceString);

//trim method
/**trim()
Removes spaces from both the start and end of a string.
Does not touch spaces in the middle. 
*/

const  stringone="   Raksha   ";
console.log(stringone.trim());
