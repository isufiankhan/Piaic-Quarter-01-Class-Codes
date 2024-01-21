"use strict";
//  MODULES
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const hello_1 = __importDefault(require("./hello"));
console.log(hello_1.default);
console.log(service_1.b);
console.log(service_1.c);
console.log(service_1.d);
console.log(service_1.f);
