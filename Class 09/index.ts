// // FUNCTION 
// function sum(){
//     console.log(1+2)
// }
// sum(); 

// function sum(){
//     return 1+2
// }

// let result = sum();
// console.log(result++)

// function sum(num1:number, num2:number): number{
//     return num1 + num2;
// }

// let result = sum(3, 6);

// console.log(result);

//                          ANONYMOUS FUNCTION

// let sum = function(num1:number, num2:number): number{
//     return num1 + num2;
// }

// sum(3,6);

// FUNCTION TYPE

// type Sum = (num1:number, num2: number) => number;

// let sum: Sum = function(num1, num2): number{
//     return num1 + num2;
// }

// sum(3,6);


// type Sum = (num1:number, num2:number) => number;

// let add: Sum = function (num1, num2){
//     return num1 + num2;
// }

// let result = add(3,6)
// console.log(result)

//             ARROW FUNCTION
// let sum = (num1: number, num2: number): number => num1 + num2
// // {
// //     return num1 + num2;
// // }
// let result = sum(3,6);  //  9
// console.log(result)

//                            PRACTISE

// let sum = (num1: number, num2: number): number => num1 * num2
// let result = sum(3,6);  //  9
// console.log(result)

//                          FUNCTION OPTIONAL PARAMETERS
// ? This means Optional.

// let fullName  = (firstName:string, lastName?:string) => {
//     if(lastName === undefined){
//         return firstName
//     } else {
//         return firstName +' ' +  lastName;
//     }
// }

// let fullN = fullName('Ahmed','Abeer')

// console.log(fullN);

//                      DEFAULT
// let fullName  = (firstName:string, lastName = "Khan") => {
//     // console.log(firstName, lastName);

//     return firstName + ' ' + lastName;
// }

// let fullN = fullName('Ahmed');   // undefined if not return is written.

// console.log(fullN)

//                      REST OPERATOR |  JOIN
// console.log("Hello World", 2, true, {}, [])

// let makeMessage = (name: string, ...message: string[]) => {
//     console.log(message[2]);  //  How
// }

// makeMessage("Ali","Hello","World","How","are","you")

// let makeMessage = (name: string, ...message: string[]) => {
//     console.log(message.join(" "));  //  How
// }

// makeMessage("Ali","Hello","World","How","are","you")

//                                  FUNCTION OVERLOADS

// function add(arg1: number, arg2: string): string;  //option 1
// function add(arg1: string, arg2: number): string;  //option 2
// function add(arg1: string, arg2: string): string;  //option 3
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// add("Hamza","Syed");

// function add(arg1: string, arg2: string): string;  //option 1
// function add(arg1: number, arg2: number): string;  //option 2
// function add(arg1: boolean, arg2: boolean): string;  //option 3
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }

// // add("Hamza","Syed");
// // add("Hamzah", "Syed")
// // add(true, false)

// let result = add(4, 7);
// console.log(result);

//                                      TUPLES
// let fruits:[string, string, number] = ["Orange","Mango", 5]
// fruits.pop()
// console.log(fruits);


// let fruits:[string, string, number] = ["Orange","Mango", 5]
// fruits.push("Apple")
// console.log(fruits);