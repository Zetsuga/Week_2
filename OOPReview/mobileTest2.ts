import {Mobile} from "./mobile"

let nokia:Mobile = new Mobile("Nokia3210","3210","Nokia",1024,"gris",false,1,620);
let iphone:Mobile = new Mobile("Iphone3G","3G","Apple",512,"blanco",false,1,800);
let samsung:Mobile = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",10048,"negro",true,5,1400);

nokia.printBonito();
iphone.printBonito();
samsung.printBonito();

let arrayMobile:Mobile[] = [nokia,iphone,samsung];

nokia.setCameraNumber(4);
nokia.setIs5G(true);
nokia.printBonito();

for(let mobile in arrayMobile){
    arrayMobile[mobile].printBonito();
}