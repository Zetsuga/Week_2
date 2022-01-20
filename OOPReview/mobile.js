"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.print = function () {
        console.log("Nombre: ".concat(this.name, "\n") +
            "Modelo: ".concat(this.model, "\n") +
            "Marca: ".concat(this.trademark, "\n") +
            "Almacenamiento: ".concat(this.sdSize, "\n") +
            "Color: ".concat(this.color, "\n") +
            "\u00BFes 5G?: ".concat(this.is5G, "\n") +
            "N\u00FAmero de camaras: ".concat(this.cameraNumber, "\n") +
            "Precio: ".concat(this.price, "\n"));
    };
    Mobile.prototype.printBonito = function () {
        console.log("The characteristic of the mobile ".concat(this.name, " are:\n") +
            "Name: ".concat(this.name, "\n") +
            "Model: ".concat(this.model, "\n") +
            "Trademarkt: ".concat(this.trademark, "\n") +
            "SD Size(GB): ".concat(this.sdSize, "\n") +
            "Color: ".concat(this.color, "\n") +
            "is 3g?: ".concat(this.is5G, "\n") +
            "Number of Cameras: ".concat(this.cameraNumber, "\n"));
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
