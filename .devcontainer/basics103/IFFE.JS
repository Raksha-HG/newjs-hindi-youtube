// IMEDIATETLY INVOKED FUNCTION EXPRESSION   --->> (/fun)()
//to avoid global scope pollution
(function add(){
 console.log("DB CONNECTED");
 
})();
//TRUTHY & FALSY

//TRUTHY
// "0"," ",[],{},function(){},"false"

//FALSY
//"" ,0 ,NULL ,NaN ,false ,undefined ,-0, bigint 0n;

//Nullish Coalesing Operator (??) : null undefined

let val1;

val1=5??10 //-->o/p=5    //--->val1=null??10 -> 10;

console.log(val1);

let val2=null??10??20;  //--> if null it will print 10
// let val2 = null ?? null ?? 20;  --> o/p=20
console.log(val2);
