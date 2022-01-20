import {Matrix} from "./matrix";

let matriz1:Matrix = new Matrix(4,3,2);
let matriz2:Matrix = new Matrix(4,3,2);

matriz1.print();
console.log(`---------------------------------------`);
matriz2.print();
console.log(`----------------------------------`)
let suma:Matrix = matriz1.add(matriz2);
suma.print();
console.log(`---------------------------------------`);
let multNumber:Matrix = matriz1.multNumber(2);
multNumber.print();
console.log(`---------------------------------------`);
//let mutSpecial:Matrix = matriz1.mutSpecial(2);
matriz1.mutSpecial(2);
//multNumber.print();
console.log(`---------------------------------------`);