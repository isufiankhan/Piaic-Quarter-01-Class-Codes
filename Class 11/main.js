"use strict";
// OBJECT ORIENTED PROGRAMING (OOP)
Object.defineProperty(exports, "__esModule", { value: true });
// oop is a way to code your program
// {BluePrint}
// class House{
//     numberofRoom: number = 4;
//     numberofBathrooms: number = 1;
// }
// let house1 = new House();
// // let house2= new House();
// // let house3 = new House();
// console.log(house1.numberofRoom)
// Normal Object
// let house2 = {
//     numberofRooms: 4
// }
// let house3 = {
//     numberofRooms: 4
// }
// let house4 = {
//     numberofRooms: 4
// }
// class practise
// class person{
//     name: string = "Ahmed";
//     age: number = 18;
//     qualification: string = "Matric"
// }
// let person1 = new person();
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.qualification);
//                                  functions in classes
// (constructor) is a apecial function for the classes
// (this) is a object that changes itself according to the situation
// class House{
//         numberofRoom: number;
//         numberofBathrooms: number;
//         constructor(noOfRooms:number, noOfBathroom:number){
//             this.numberofBathrooms = noOfBathroom
//             this.numberofRoom = noOfRooms
//         }
//     }
// let house1 = new House(4, 2);
// let house2 = new House(3, 1);
// console.log(house1);
// console.log(house2);
//                                  Another Example(testing)
// class House{
//     // numberofRoom: number;
//     // numberofBathrooms: number;
//     constructor(noOfRooms:number, noOfBathroom:number){
//     this // this = {}
//         // this.numberofBathrooms = noOfBathroom
//         // this.numberofRoom = noOfRooms
//     }
// }
// let house1 = new House(4, 2);
// let house2 = new House(3, 1);
// console.log(house1);
// console.log(house2);
//                              Continuing (Function in classes):
// readonly is key word to make the subject that it can only be read.
// class House{
//         readonly numberofRoom: number;
//         readonly numberofBathrooms: number;
//         constructor(noOfRooms:number, noOfBathroom:number){
//             this.numberofBathrooms = noOfBathroom
//             this.numberofRoom = noOfRooms
//         }
//     }
// let house1 = new House(4, 2);
// let house2 = new House(3, 1);
// // house1.numberofBathrooms = 1;
// console.log(house1);
// console.log(house2);
//                    Continuing my person class adding constructor and readonly
// class person{
//     readonly name: string;
//     readonly age: number;
//     readonly qualification: string;
//     constructor(Name: string, Age: number, Qualifation:string){
//         this.name = Name
//         this.age = Age
//         this.qualification = Qualifation
//     }
// }
// let person1 = new person("Ahmed", 18, "Matric");
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.qualification);
//                          Doorbell
// class has two things method and function:
// class House{
//     numberofRoom: number;
//     numberofBathrooms: number;
//     constructor(noOfRooms:number, noOfBathroom:number){
//     // this // this = {}
//         this.numberofBathrooms = noOfBathroom
//         this.numberofRoom = noOfRooms
//     }
//     doorbell(){                     // Method (Function):
//         console.log(`bell pressed`)
//     }
// }
// let house1 = new House(4, 2);
// let house2 = new House(3, 1);
// house1.doorbell()
// console.log(house1);
// console.log(house2);
//                                       Inheritance
// constructor runs at first
// class Person {
//     name: string
//     constructor(name:string){
//         // this.name = name
//     }
// }
// class Person1 {
//     name: string
//     salary: number
//     constructor(name: string, salary: number){
//         this.name = name
//         this.salary = salary
//     }
// }
// class Person2 {
//     name: string
//     hobby: string
//     constructor(name: string, hobby: string){
//         this.name = name
//         this.hobby = hobby
//     }
// }
// let person1 = new Person1("Bilal", 100000000)
// let person2 = new Person2("Bilal", "Cricket")
//                                     my Practise
//                          Correct
// class Person {
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
// }
// class Person1  extends Person{
//     salary: number
//     constructor(name: string, salary: number){
//         super(name)
//         this.name = name
//         this.salary = salary
//     }
// }
// class Person2 extends Person {
//     hobby: string
//     constructor(name: string, hobby: string){
//         super(name)
//         // this.name = name
//         this.hobby = hobby
//     }
// }
// let person1 = new Person1("Bilal", 10000)
// let person2 = new Person2("Bilal", "Cricket")
// console.log(person1)
//                          Another Example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class teacher extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class student extends Person {
    constructor(name, age, hobby) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}
let teacher1 = new teacher("Usama", 22, 10000);
let student1 = new student("Usama", 22, "Cricket");
console.log(teacher1);
