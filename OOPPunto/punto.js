"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        console.log("(".concat(this.x, ",").concat(this.y, ")"));
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = 0;
        distancia = Math.sqrt((this.x * this.x) + (this.y * this.y));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distancia = 0;
        distancia = Math.sqrt(Math.pow((this.x - otroPunto.getX()), 2) + Math.pow((this.y - otroPunto.getY()), 2));
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x == 0 || this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var cercano = null;
        var puntoOrigen = new Punto(this.getX(), this.getY());
        for (var i = 0; i < puntos.length; i++) {
            if (cercano == null || Math.abs(puntos[cercano].calcularDistancia(puntoOrigen))
                > Math.abs(puntos[i].calcularDistancia(puntoOrigen))) {
                cercano = i;
            }
        }
        return puntos[cercano];
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    return Punto;
}());
exports.Punto = Punto;
