"use strict";
//TRANSFERING VAR FROM ONE FILE TO ANOTHER (MODULE)
// FIRST METHOD
// export let f = 50;
// export let b = 10;
// export let c = 20;
// export let d = 22;
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = exports.d = exports.c = exports.b = void 0;
// SECOND METHOD
let f = 50;
exports.f = f;
let b = 10;
exports.b = b;
let c = 20;
exports.c = c;
let d = 22;
exports.d = d;
//IN EXPORT WE CANNOT ASSIGN A NEW NAME WHILE IMPORTING IT.
//IN DEFAULT EXPORT WE CAN ASSIGN A NEW NAME WHILE IMPORTING IT.
