const marvelHeros=["ironman","spiderman","mr.stranger"];
const dcHeros=["superman","flash","batman"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// concat fun
// const allHeros=marvelHeros.concat(dcHeros);
// console.log(allHeros);
//spread
//  const allnewHearos=[...marvelHeros,...dcHeros];
//  console.log(allnewHearos);

 const anotherArray=[1,2,[5,6,7,[1,2,[3]]],6,7,3,4,[2,3,4]];
 const real_anotherArray = anotherArray.flat(3);
 console.log(real_anotherArray);
 //convert string into arrary using "from"
 console.log(Array.from('Raksha'));

 // converting single variables into array

 let score1=100;
 let score2=200;
 let score3=300;

 console.log(Array.of(score1,score2,score3));