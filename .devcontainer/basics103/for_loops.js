//FOR OF 
 const myArray=[2,3,4,5,6];
for (const i of myArray) {
    console.log(i);
    
}
const greeting="HelloWorld";
for (const i of greeting) {
    console.log(i);
    
}

//Maps

const map= new Map();
map.set('in','india');
map.set('un',"unitedState");
map.set('R',"Rome");
map.set('in','india');
console.log(map);
// LOOP ON MAP

for (const [key,value] of map) {
    console.log(key,':-',value);
}
 const myObj={
    'game1':'NFS',
    'game2':'SPIDERMAN'
 }

//  for (const [key,value] of myObj) {  XXX not posible for Objects XXX };
//      console.log(key,':-',value);

//  }