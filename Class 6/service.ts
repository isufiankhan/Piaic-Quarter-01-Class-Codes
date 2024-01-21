                //TRANSFERING VAR FROM ONE FILE TO ANOTHER (MODULE)
                    // FIRST METHOD
// export let f = 50;
// export let b = 10;
// export let c = 20;
// export let d = 22;

                    // SECOND METHOD
let f = 50;
let b = 10;
let c = 20;
let d = 22;
export{b, c, d, f};

//IN EXPORT WE CANNOT ASSIGN A NEW NAME WHILE IMPORTING IT.
//IN DEFAULT EXPORT WE CAN ASSIGN A NEW NAME WHILE IMPORTING IT.