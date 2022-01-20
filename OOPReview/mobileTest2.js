"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", 1024, "gris", false, 1, 620);
var iphone = new mobile_1.Mobile("Iphone3G", "3G", "Apple", 512, "blanco", false, 1, 800);
var samsung = new mobile_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 10048, "negro", true, 5, 1400);
nokia.printBonito();
iphone.printBonito();
samsung.printBonito();
var arrayMobile = [nokia, iphone, samsung];
nokia.setCameraNumber(4);
nokia.setIs5G(true);
nokia.printBonito();
for (var mobile in arrayMobile) {
    arrayMobile[mobile].printBonito();
}
