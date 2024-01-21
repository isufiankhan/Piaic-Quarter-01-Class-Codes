"use strict";
// FUNCTIONS
// Callback
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function hello(){
//     console.log("Hello Ratan lal")
// }
// function world(callback:any){
//     callback()
// }
// world(hello)
// Another Example
// function hello(nam:string){
//     console.log(nam)
// }
// let a = "Hello World"
// function world(callback:any){
//     let a = "Hello Ahmed"
//     callback(a)
// }
// world(hello)
//                               Adding another parameter
// function hello(nam:string){
//     console.log(nam)
// }
// let a = "Hello World"
// function world(x:string,callback:any){
//     callback(x)
// }
// world("Hello Ahmed",hello)
//                                  Another Explanation (Call Back)
// function func(nam:string){
//     console.log(nam)
// }
// function hello(text:string,callback:any){
//     callback(text)
// }
// hello("Hello Ahmed",func)
//                                   ASYNCRONAS
// console.log("first");
// function printSecond(){
//     console.log("second")
// }
// setTimeout(printSecond, 2000);
// setTimeout(() => {
//     console.log("third");
// }, 1000);
//                                  Another Method:
// console.log("first");
// setTimeout(() => {                      // transfer the asynchronas function to web api because it has timer:
//     console.log("second");
// }, 2000);
// setTimeout(() => {
//     console.log("third");   // This will print first because it has less time limit:
// }, 1000);
//                          Sir Okasha Explanation:(Synchronas and Asynchronas)
// console.log("first");
// setTimeout(() => {
//     console.log("second")    //         second will print in last because it was on web api.
// }, 0);
// for(let i = 0; i < 10000000000; i++){       // loop takes time:
//     let b = 0                               // loop is synchronas function
// }
// console.log("third");
// Asynchornas functions are handovered to web api for a time period after all the code is read by compiler 
// the web api return the asynchronas function to the program.
// Synchoronas functions will run at first and Asunchornas will run after the Synchoronas Functions.
// Servers takes time to contact.
//                          CALLBACK HELL (Real world Example:)
// Asynchoronas nested Asynchornas depends upon its Father Asynchornas:
// setTimeout(() => {
//     console.log("User Profile")
//     setTimeout(() => {
//         console.log("User Post")
//         setTimeout(() => {
//             console.log("User Comments")
//         }, 1000);
//     }, 2000);
// }, 3000);
//                  PROMISE
// let myPromise = new Promise((resolve, reject) => {
//     console.log("promise pending ....")
//     setTimeout(()=> {
//         // console.log("promise resolve....")
//         // resolve("Ahmed")
//         console.log("promise rejected")
//         reject("data fetch error.....")
//     }, 2000)
// })
// myPromise
// .then((res)=>(console.log(res)))
// .catch((err)=>(console.log(err)))
//                  Promise Another Example adding Conditions(Promise Chaining)
//                      Promise Chaining
// let myPromise = new Promise((resolve, reject) => {
//     console.log("promise pending ....")
//     setTimeout(()=> {
//         let data = ["Ahmed", "Abeer"]
//         if(data){
//             console.log("promise resolved")
//             resolve(data)
//         } else{
//             console.log("promise rejected..")
//             reject("data fetch error")
//         }
//     }, 2000)
// })
// myPromise
// .then((res)=>(console.log(res)))
// .catch((err)=>(console.log(err)))
// Api is Basically a fridge where you store your function.
// Api fake web name (jsonplaceholder)!!
// all the (promise) work can be done by only with (fetch).
// let data = fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch((err)=>console.log("hello World"))
// console.log("data", data)
//                      Async Function
function dataFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        let fetchdata = yield fetch("https://jsonplaceholder.typicode.com/users");
        let data = yield fetchdata.json(); // to make data readable
        console.log(data);
    });
}
dataFunc();
