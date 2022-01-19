import {Vector} from "./vector";

let vector1:Vector = new Vector(3,5);
let vector2:Vector = new Vector(3,5);

vector1.print();
vector2.print();

let suma:Vector = vector1.add(vector2);
suma.print();
let subs:Vector = vector1.subs(vector2);
subs.print();
let mult:Vector = vector1.mult(vector2);
mult.print();
let mulNum:Vector = vector1.multNumber(2);
mulNum.print();