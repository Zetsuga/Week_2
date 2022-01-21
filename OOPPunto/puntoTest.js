"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var punto = new punto_1.Punto(2, 3);
var punto2 = new punto_1.Punto(6, 2);
var punto3 = new punto_1.Punto(-6, -3);
var punto4 = new punto_1.Punto(4, 1);
var arrayPuntos = [punto2, punto3, punto4];
punto.toString();
console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(punto2));
console.log("Cuadrante: " + punto.calcularCuadrante());
var puntoCercano = punto.calcularMasCercano(arrayPuntos);
puntoCercano.toString();
