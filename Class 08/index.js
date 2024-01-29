"use strict";
// type Children = {
//     name: string,
//     age: number
// }
// type Person = {
//     name: string;
//     age: number;
//     email: string;
//     children?: Children
//     // {     //  ? defines that the property is optional.
//     //     name: string,
//     //     age: number
//     // }
// }
//                         // Nested Object:
// const person: Person = {
//     name: "Usman",
//     age: 23,
//     email: "usman@gmail.com",
//     children: {
//         name: "Faheem",
//         age: 15,
//     },
// }
// const person2: Person = {
//     name: "Tayyab",
//     age: 18,
//     email: "tayyab@gmail.com"
// }
// const child: Children = {
//     name: "Faheem",
//     age: 15
// }
// type Person = {
//     name: string;
//     age: number;
//     email: string;
// }
// let person1: Person = {  // Fresh Object
//     name: "ali",
//     age: 22,
//     email: "ali@gmail.com"
//     // address: "etc"               // No extra property allowed✖✖
// }
// let person2 = {
//     name: "Hamza",
//     age: 22
// }
// person2 = person1;      // Stale Object
// console.log(person2.name)
// type Student = {
//     name: string,
//     rollNumber: string
// }
// type Teacher = {
//     name: string,
//     experience: number
// }
// let st1: Student = {
//     name: "Faheem",
//     rollNumber: "PIAIC245"
// }
// let teacher1: Teacher = {
//     name: "Zia",
//     experience: 10
// }
// // let both: Student | Teacher = [
// //     name: "Hamza",
// //     experience: 2,
// //     rollNumber: "264"
// // ]                    // ERROR
// let both: Student & Teacher = {     // ASSIGNING TWO TYPES IN 1 OBJECT.
//     experience: 22,
//     name: "Usama",
//     rollNumber: "PIAIC547"
// }
// both.rollNumber
// NEW DATA TYPES:  ANY ||  UNKNOWN  ||  NEVER ::::::::
//                      ANY:::::::::
// let a: any = 10;
// let b: boolean = true;
// a = "Hello World";
// a = b;
// a = b;
// b = a;
//                      UNKNOWN:::::::
// let a: unknown = "Hello World";
// let b:boolean = true;
// // a = 10;
// // a = true;
// // a = {}
// //can we
// a = b;
// // b = a;  // ERROR
//                          NEVER:::::::
// let a: string = "Hello World";
// if(typeof a === "string"){
//     console.log(a)
// }else{
//     console.log(a);
// }
// let a:unknown;
// a = "Hamza" as string;
// let myname: unknown = "Zia";
// console.log((myname as string).toUpperCase());
// // console.log((<string> myname).length);
// myname
//                      EXPLICT CASTING::::::::::::::::::
// let a: string = "Hamza";
// let b: unknown = 55;
// a = b as string;
//                          ENUM:::::::::::::::::
// let meetingDay: string = "Monday"
// if(meetingDay === "Sunday"){
//     console.log("No meeting")
// } else if(meetingDay === "Monday"){
//     console.log("Meeting at 10:00 AM")
// }
// //  ...............
// enum
// let days: "monday" | "tuesday" //.........
// enum Days {
//     Sunday, //1
//     Monday, //2
//     Tuesday, //3
//     Wednesday, //4
//     Thursday, //.......
//     Friday,
//     Saturday
// }
// // console.log(Days.Wednesday)
// let meetingDay: Days = Days.Monday;
// if(meetingDay === Days.Monday){
//     console.log("Meeting at 10:00 AM")
// } else if(meetingDay === Days.Tuesday){
//     console.log("No Meeting")
// }
// let Operators: "Addition" | "Subtraction" | "Multiplication" | "Division"
// enum operators {
//     Add,
//     Sub,
//     Mul,
//     Div
// }
// // console.log(operators.Add)
// let call: operators = operators.Add
// if(call === operators.Add){
//     console.log(2 + 2)
// }
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);
//                          const ENUM:::::::::::::::::::
// const enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1["Green"]; //Not allowed with const enums
// console.log(colorName);
//                          ARRAY DATATYPES:::::::::::::::::
// let fruits: string[] = ["Apple", "Banana"]
// type Person = {
//     name: string;
// }
// // let p1: Person = {
// //     name: "Hamza"
// // }
// let p:Person[] = [
//     {
//         name: "Hamza"
//     },
//     {
//         name: "Usman"
//     },
//     {
//         name: "Faheem"
//     }
// ]
// console.log(p[1].name)
