// export const a = "Sufian";
// WE CAN ADD DIFFERENT DATATYPE WITH THE HELP OF UNION SIGN ( | ) TO ANY VARIABLE.
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 12, length: 3 };
//tube = ball;//Error
ball = tube;
export {};
