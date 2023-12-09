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
let is_shop_open=true;
function time(ms){
  return new Promise((resolve, reject) =>{
    if(is_shop_open){
      setTimeout(()=>{
        resolve("ok");
      },ms);
    }
    else{
      reject(("shop is closed"));
    }
  })
}
async function kitchen(){

  console.log(`dekhte hai`)
  try{
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);
    await time(1000);
    console.log(`Production has started`);
    await time(2000);
    console.log(`Fruit has been chopped`);
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    await time(1000);
    console.log(`${stocks.holder[0]} and ${stocks.holder[1]} were used`);
    await time(3000);
    console.log(`Topping ${stocks.toppings[0]} and ${stocks.toppings[1]} were added.`);
    await time(2000);
    console.log('The icecream is ready');
  }
  catch(error){
    console.log("customer left",error);
    // throw error;
  }
  finally{
    console.log("Day ended, shop is closed");
  }
}
kitchen();
          





