// let divs=document.querySelectorAll("div");



// console.log(divs);
// divs.forEach((div)=>{
//     div.style.color="red";
// });
// // for(let div in divs){
// //     div.style.color="blue"; 
// // }
// //for in
// for(let div of divs){
//     div.style.color="blue";
// }
// let button=document.querySelector("button");
// // button.addEventListener("click",()=>{
// //   if(document.body.style.backgroundColor!=="black")  
// //   document.body.style.backgroundColor="black";
// //   else{
// //     document.body.style.backgroundColor="white";
// //   }
// //   });
// button.onclick=(evt)=>{
//   if(document.body.style.backgroundColor!=='black'){
//     document.body.style.backgroundColor='black';}
  
//   else{
//     document.body.style.backgroundColor='white';
//   }  
// }git 
let stocks={
  Fruits : ["Apple", "Orange", "Ban", "strawberry"],
  liquid: ["water","ice"],
  holder: ["cone","cup","stick"],
  toppings : ["chocolate","peanuts"],

}
// let order =(fruit_name, call_production)=>{
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruit_name]}`);
//     call_production();
//   }, 2000);
//   console.log("Order placed. Please call production");
// }
// let production=()=>{
//   setTimeout(()=>{
//     console.log(`Production has started`);
//     setTimeout(() => {
//       console.log(`Fruit has been chopped`);
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//         setTimeout(()=>{
//           console.log(`${stocks.holder[0]} and ${stocks.holder[1]} were used`);
//           setTimeout(()=>{
//             console.log(`Topping ${stocks.toppings[0]} and ${stocks.toppings[1]} were added.`);
//             setTimeout(()=>{
//               console.log('The icecream is ready');
//             },1000);
//             },3000)  
//         },2000);
//       }, 1000);
//     }, 2000);
//   },0000);
//   console.log("order placed. starting production");
// }
// order(0,production);

//promises
// let is_shop_open=true;
// let order=(time,work)=>{
//   return new Promise((resolve,reject)=>{
//     if (is_shop_open){
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//       }else{
//         reject(`shop is closed`);
//       };

//   });
// }
// order(2000,()=>{
//   console.log(`${stocks.Fruits[0]} was selected`);
// })
// .then(()=>{
//   return order(0000,()=>{
//     console.log(`Production has started`);
//   });
// })
// .catch(()=>{
//   console.log("Shop is closed");
// })
// .finally(()=>{
//   console.log("Order completed");
// })
//async/await
// let is_shop_open=true;
// function time(ms){
//   return new Promise((resolve, reject) =>{
//     if(is_shop_open){
//       setTimeout(()=>{
//         resolve("ok");
//       },ms);
//     }
//     else{
//       reject(("shop is closed"));
//     }
//   })
// }
// async function kitchen(){

//   console.log(`dekhte hai`)
//   try{
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} was selected`);
//     await time(1000);
//     console.log(`Production has started`);
//     await time(2000);
//     console.log(`Fruit has been chopped`);
//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//     await time(1000);
//     console.log(`${stocks.holder[0]} and ${stocks.holder[1]} were used`);
//     await time(3000);
//     console.log(`Topping ${stocks.toppings[0]} and ${stocks.toppings[1]} were added.`);
//     await time(2000);
//     console.log('The icecream is ready');
//   }
//   catch(error){
//     console.log("customer left",error);
//     // throw error;
//   }
//   finally{
//     console.log("Day ended, shop is closed");
//   }
// }
// kitchen();
// console.log(document.cookie);
// document.cookie="name=shubham";
// document.cookie=`${encodeURIComponent("a;;")}=ayush`;
// console.log(document.cookie);

//Fetch API two times .then or two await required res.json is a promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=>{
//   console.log(error);
// })
// async function fetchdata(){
//   const res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data=await res.json();
//   console.log(data);
// }
// fetchdata();
// async function fetchdata(){
//   const res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data=await res.json();
//   console.log(data);
// }
// fetchdata();

//local storage survives tabs and browser closing and session storage only page refresh
//storage events gets trigerred when these storages gets updated

//.__proto__ is used to set a prototype to an object
// function Person(name,age){
//   this.name=name;
//   this.age=age;
// }
// Person.prototype.getName=function(){ 
//   return this.name;
// }
//classes are the template thatcan be used by the objects and its prototypes
//constructors are called automatically
//extends keyword is for generating derived class or inheritance in javascript 



//method overiding
// class Person{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   getName(){
//     return this.name;
//   }
// }

// class Student extends Person{
//   constructor(name,age,grade){
//     super(name,age);
//     this.grade=grade;
//   }
//   getName(){
//     return `${super.getName()} is a student`;
//   }
// }
// let p=new Person("shubham",21);
// console.log(p.getName());
// let s=new Student("ayush",21,10);
// console.log(s.getName());
// console.log(s.grade);

//super constructor should be called everytime if forming a constructor and should be called before this keyword is used

//IIFE- immediately invoked functions can be used to run async await without clouding the global variable namespace
//Destructuring - used for unpacking values in arrays and in objects
// const person={
//   name:"shubham",
//   age:21,
//   greet:()=>{
//     console.log("hello");
//   }
// }
// const printName=({name,age})=>{
//   console.log(name,age);
// }
// printName(person);
// const {name,age}=person;
// console.log(name,age);
// const hobbies=["sports","cooking"];
// const [hobby1,hobby2]=hobbies;
// console.log(hobby1,hobby2);
// using ...
// spread operator - ...
// const copiedArray=[...hobbies];
// console.log(copiedArray);
// const copiedPerson={...person};
// console.log(copiedPerson);
// rest operator - ...
const toArray=(...args)=>{
  return args;
}
console.log(toArray(1,2,3,4,5));
const toArr=(arg1,arg2,...args)=>{
  return [arg1,arg2,args];

}
const toObject=(arg1,arg2,...args)=>{
  return {arg1,arg2,args};

}
console.log(toObject(1,2,{3:45}));
console.log(toArr(1,2,3,4,5));