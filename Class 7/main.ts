// export const a = "Sufian";
// WE CAN ADD DIFFERENT DATATYPE WITH THE HELP OF UNION SIGN ( | ) TO ANY VARIABLE.

// let a:String | number | boolean = "Sufian";

// a = 10;
// a = "Abeer";
// a = true;

// let age: number = 22;
// console.log(age.toFixed(20))

// let firstName: string = "Sufian";
// console.log (firstName.toLowerCase())

// let age: string | number;
// age = 22;
// age.toFixed(2);
// age = "22";

// let age: string | number = "22";
// console.log(typeof age);

// let age: string | number = "22";

// WRONG METHOD🤦‍♂️:
// if(typeof age === "string"){
//     age.toUpperCase
// }  else{
//     age.
// }

// console.log(Math.random())

// let newAge =  Math.random() > 0.5 ? 22 : "khan";

// if(typeof newAge === "string"){
//     newAge.toLocaleUpperCase()
// } else{
//     newAge.toFixed(2)
// }

// LITERALL TYPES:

// let trafficLights: "yellow" | "red" | "green" = "yellow";

// trafficLights = "red";
// trafficLights = "green";


// let teacher: {
//     name: string,
//     salary: number,
//     "full-name": string
// } = {
//     name: "Hamzah",
//     salary: 300000,
//     "full-name": "Hamzah Syed"
// }

// console.log(teacher.name) //Hamzah
// console.log(teacher.salary)  //30000
// console.log(teacher["full-name"])  //Hamzah Syed


// OBJECT ALIASED (TYPE ALIASED)


// CUSTOM DATATYPE:
// type Student = string | boolean | number | undefined
// let a:Student; // GOOD PRACTICE
// let b: string | boolean | number | undefined // Bad Practise

// type Student = {
//     name: string,
//     age: number
// }

// let student1: Student = {
//     name: "Ahmed",
//     age: 19
// }

// let student2: Student = {
//     name: "Abeer",
//     age: 21
// }

// type Deal1 = {
//     food: string,
// }

// type Deal2 = {
//     food: string,
//     drink: string
// }

// let hamzahOrder: Deal1 = {
//     food: "Biryani"
// }

// let okashaOrder: Deal2 = {
//     food: "Biryani",
//     drink: "Coke"
// }

// // let a = 22
// // let a = "22"
// // a = b //Error

// hamzahOrder = okashaOrder;  // NO ERROR
// console.log(hamzahOrder.food)
// // okashaOrder = hamzahOrder;  //error MISSING - PROPERTY

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };

  sphere = ball;
  ball = sphere;

  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.

  interface Tube {
    diameter: number;
    length: number;
  }

  let tube: Tube = { diameter: 12, length: 3 };

  //tube = ball;//Error
  ball = tube;

  