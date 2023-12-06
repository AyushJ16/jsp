
// Example using for...in loop
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key, obj[key]);
}

// Example using for...of loop
const arr = [1, 2, 3, 4, 5];

for (let element of arr) {
  console.log(element);
}
//example of forEach vs for in
const array = ['a', 'b', 'c'];
array.forEach((item) => {
  console.log(`${item}`);
  });
  // a
  // b
  // c
  let sum=0;
  arr.forEach((num)=>{sum+=num});
  console.log('Summation with For Each:'+sum);
 const ob=[1,2,3]
 ob.forEach((num)=>console.log(num));

 //forEach to iterate over objects
 const person={name:"John",age:30};
 Object.keys(person).forEach((key)=>console.log(`Key : ${key}, Value : ${person[key]}`))

    // Key a: Value 1
    // Key b: Value 2
    // Key c: Value 3
//     //example of forEach vs for of
let divs=document.querySelectorAll("div");


console.log(divs);
divs.forEach((div)=>{
    div.style.color="red";
});
// for(let div in divs){
//     div.style.color="blue"; 
// }
//for in
for(let div of divs){
    div.style.color="blue";
}
let button=document.querySelector("button");
// button.addEventListener("click",()=>{
//   if(document.body.style.backgroundColor!=="black")  
//   document.body.style.backgroundColor="black";
//   else{
//     document.body.style.backgroundColor="white";
//   }
//   });
button.onclick=(evt)=>{
  if(document.body.style.backgroundColor!=='black'){
    document.body.style.backgroundColor='black';}
  
  else{
    document.body.style.backgroundColor='white';
  }  
}
//understood JSON web tokens, cookies
//NodeJs is a runtime environment not a framework whereas Express is a framework to write server side applications

//doesnt work




