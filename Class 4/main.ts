// if else function , condition

                                    // and function
// const firstName:string = "Hamzah";
// let lastName:string = "Syed";

//                 //true                     // false
// if(firstName === "Hamzah" && lastName === "syed"){
//     console.log("You are not Allowed")
// }

// else{
//     console.log("You are Allowed")
// }

                            // or function
// const firstName:string = "Hamzah";
// let lastName:string = "Syed";

//                // //true                  //   // false
// if(firstName === "Hamzah" || firstName === "Okasha"){
//     console.log("You are not Allowed")
// }

// else{
//     console.log("You are Allowed")
// }

                        //  FUNCTIONS

// function greet(){
//     console.log("Hello Hamzah")
// }   

// function sum(){
//     console.log(2 +2)
// }

// greet();
// sum();
//  greet();
                        // PARAMETER AND ARGUMENT:
// function greet(name : string){
//     console.log("Hello", name);
// }
// greet("Hamzah");
// greet("Ahmed");

            // 5            //10
// function sum(num1: number, num2:number){
//     console.log(num1 + num2);
// }

// sum(5, 10);
// sum(55, 10);
                        // ADDITION AND MULTIPLICATION PARAMETERS AND ARGUMENTS
                    
// function sum(num1: number, num2:number){
//     // console.log(num1 + num2);
//     return num1 + num2;
// }
//                 // ASSIGN THE VALUE TO ANY VARAIABLE
// let ans = sum(5, 10) // 15

// function multiply(num1: number){
//     console.log(num1 * 2);
// }

// multiply(ans)

                        // ARRAY
// let fruit1 = "Apple";
// let fruit2 = "Orange";
// let fruit3 = "Banana";
// let fruit4 = "Pineapple";

// let fruits = ["Apple", "Orange", "Banana", "Pineapple"];
// let subjects:string[] = ["Math", "Science", "English", "History"];

// let ages:number[] = [10, 20, 30, 40, 50];
            // 0            1       2           3
// let fruits = ["Apple", "Orange", "Banana", "Pineapple"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[3], fruits[0]);


// let fruits = ["Apple", "Orange", "Banana", 4];

// let menu = ["Kofta", "kheer", "Biryani"];

// menu.push("Pepsi");

// menu.pop();

// console.log(menu[2]);

                    // another example
// let menu = ["Kofta", "kheer", "Biryani"];
// let myfirstPopped = menu.pop();
// console.log(myfirstPopped);

// let menu = ["Kofta", "kheer", "Biryani"];
// let pushedReturn = menu.push("Pepsi", "Halva");
// console.log(pushedReturn);
                        // shift and unshift

// let menu = ["Kofta", "kheer", "Biryani", "Gajjar ka Halva"];
// let shiftedvElements = menu.shift();

// let len = menu.unshift("Pepsi");

// console.log(len);

                    // slice 

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);

                    // splice

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.splice(2,1, "Lemon", "Kiwi");
console.log(fruits);