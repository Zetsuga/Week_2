import { Punto } from "./punto";
import {Triangulo} from "./triangulo";

let punto:Punto = new Punto(2,3);
let punto2:Punto = new Punto(6,2);
let punto3:Punto = new Punto(4,1);

let triangulo:Triangulo = new Triangulo(punto,punto2,punto3);

console.log(triangulo.calcularLongitudLados());