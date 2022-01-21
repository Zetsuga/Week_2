import { Punto } from "./punto";

let punto:Punto = new Punto(2,3);
let punto2:Punto = new Punto(6,2);
let punto3:Punto = new Punto(-6,-3);
let punto4:Punto = new Punto(4,1);
let arrayPuntos:Punto[] = [punto2,punto3,punto4];

punto.toString();
console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(punto2));

console.log("Cuadrante: " + punto.calcularCuadrante());

let puntoCercano:Punto = punto.calcularMasCercano(arrayPuntos);
puntoCercano.toString();