"use strict";
// ACCESS MODIFIERS
// public 
// private 
// protected
// class Person{
//     public name:string = "Ahmed"       // Public method Property
//     protected salary:number = 10000000    // Private method property
//     // protected age:number = 18
//     getname(){
//         console.log(this.name)
//     }
// }
// class Human extends Person{
//     hello(){
//         this.salary
//     }
// }
// let p = new Person()
// let h = new Human()
// // console.log(p.salary)
// SET AND GET:
// class Person{
//     private _name  = "Ahmed"
//     get name(){
//         return this._name
//     }
//     set name(val){
//         this._name = val
//     }
// }
// let p = new Person()
// console.log(p.name)
// p.name = "Usama"
// console.log(p.name)
// // p.name = "Abeer"
// // console.log(p.name)
// SECOND EXPLANATION:
// class Person{
//     private _name  = "Ahmed"
//     private _salary = "1000000"
//     get salary(){
//         let isallowed = true
//         if(isallowed){ 
//             return this._salary
//         }
//         return "****** ki Ijazat kay begair no Access"
//     }
//     set salary(val:string){
//         this._salary = val
//     }
//     updateName(nam:string){
//         this._name = nam
//     }
// }
// let p = new Person()
// console.log(p.salary)
//                          Second Topic
// interface Hello{
//     age:number,
//     email?:string
// }
// abstract class Person{
//     name = "Ahmed"
// }
// // let p = new Person()         //ERROR H.W9
// class Human implements Person,Hello{
//     name = "Usama";
//     age = 20
// }
// let h = new Human()
// console.log(h.name)
// console.log(h.age)
//                      Another Method
// class Player{
//     game(){
//         console.log("Cricket")
//     }
// }
// class Game extends Player{
//     game(){
//     console.log("FootBall")
//     }
// }
// let g = new Game()
// console.log(g.game())
//                          Another Example:
// class Animal{
//     sound(){
//         console.log("Some Sound")
//     }
// }
// class Cat extends Animal{
//     sound(): void{
//         console.log("meeeowwww......")
//     }
// }
// class Cow extends Animal{
//     sound(): void{
//         console.log("muuuuuuuu......")
//     }
// }
// let cowVoices = new Cow();
// console.log(cowVoices.sound())
//                          FRESH AND SCAPE OBJECTS:
let a = { name: "Abeer" };
let b = { name: "Ahmed", age: 18 };
a = b;
