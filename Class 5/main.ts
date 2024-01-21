// Class 05
//                          Loops:

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

//          WE CAN MAKE A LOOP FUNCTION LIKE THIS:

// for (let i = 0; i < 6; i++){
//     console.log("Hello World");
// }

//                  THE INSIDE SYSTEM OF LOOP:
// let i = 10;
// i++;
// console.log(i);

//                    HOW TO PRINT NUMBERS FROM 1 TO 10 with for LOOP:
// for(let i = 1; i < 11; i++){
//     console.log(i);
// }

//                      ANOTHER EXAMPLE ( ADDING ARRAY TO LOOP):
// const std = ["Abeer","Ahmed","Usama"];
// for(let i = 1; i < 11; i++){
//     console.log(std[2]);
// }

//                      TO PPRINT ALL THE NAMES IN ARRAY:
// const std = ["Abeer","Ahmed","Usama"];
// for(let i = 0; i < 3; i++){
// console.log(std[i]);
// }

//                      TO ADD ANOTHER THING WITH CONSOLE FUNCTION:
// const std = ["Abeer","Ahmed","Usama"];
// for(let i = 0; i < 3; i++){
// console.log(` ${std[i]}  🤞`);
// }

//                      MAKE A TABLE OF 2 USING LOOP FUNCTION:
let arr = ["a","b","c", "d", "e", "f", "g", "h", "i", "j"];
// for(let a = 1; a <=10 ; a++){
//     let ans = a * 2
//     console.log("2", "x", a, "=", ans);
// }

//                      MAKE A TABLE OF 12 USING LOOP FUNCTION:
// for(let a = 1; a <= 12; a++){
//     let ans = a * 12;
//     console.log("12", "x", a, "=", ans);
// }

//                       NESTED LOOPS:
//  PARENT LOOP RUNS THE CHILD LOOP AFTER ITSELF(ONE TIME PARENT LOOP IS PRINTED AND THEN FOUR TIMES CHILD LOOP IS PRINTED, AND BREAK FUNCTION STOP THE COMPILER TO RUN THE NESTED LOOP AFTER THE BREAK):
// for(let i = 0; i < 3; i++){
//     console.log("Parent Loop", i)
// // break;
//     for (let j = 0; j < 4; j++){
//         console.log("Child Loop", j)
//     }
// }

//                      NESTED LOOP (EXAMPLE):
// let videos = ["video1", "video2", "video3", "video4", "video4"];
// // console.log(videos.length)
// for(let i = 0; i < videos.length; i++){
//     console.log(videos[i])
// }

//          OBJECTS:        WRONG METHOD TO ASSIGN OBJECTS AND PROPERTIES
// let videoTitle = "video1"
// let video1Description = "video 1 description"
// let videoImage = "https://image.com"

//            OBJECTS:      WRONG METHOD TO ASSIGN OBJECTS AND PROPERTIES
// let video1 = {
//     title: "video1",
//     description: "video 1 Description",
//     image: "https://image.com"
// }

// console.log(video1.description);

//                  HOW TO MAKE ARRAY OF OBJECTS:
// const videos = [
//     {
//         title: "video1",
//         description: "video 1 Description",
//         image: "https://image.com"
//     },
//     {
//         title: "video2",
//         description: "video 2 Description",
//         image: "https://image.com"
//     },
//     {
//         title: "video3",
//         description: "video 3 Description",
//         image: "https://image.com"
//     }
// ]

// console.log(videos[1].description)

// for(let i = 0; i<videos.length; i++){
//     console.log(videos[i].title);
// }


//                      JSON
let video1 = {
    title: "video1",
    description: "video 1 Description",
    image: "https://image.com",
    view : 1000
}