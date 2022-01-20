import {Mobile} from "./mobile";
import {MobileLibrary} from "./mobileLibrary";

let nokia:Mobile = new Mobile("Nokia3210","3210","Nokia",1024,"gris",false,1,620);
let iphone:Mobile = new Mobile("Iphone3G","3G","Apple",512,"blanco",false,1,800);
let samsung:Mobile = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",10048,"negro",true,5,1400);
let xiaomi:Mobile = new Mobile("Xiamomi NF 3","NF 3","Xiaomi",5048,"blanco",true,5,580);

let arrayMobile:Mobile[] = [nokia,iphone,samsung,xiaomi];
let libreria:MobileLibrary = new MobileLibrary("Mis teléfonos","Mi cajón",arrayMobile);

//console.log(libreria.totalPriceCalculation());
libreria.printLibrary();

let ztc:Mobile = new Mobile("ZTC Shur primo","3Shur primo","ZTC",512,"verde",false,1,30);
let ericson:Mobile = new Mobile("Ericsson Z4","Z4","Ericsson",23,"Transparente",false,1,5);
let samsung2:Mobile = new Mobile("Samsung Galaxy S 20","Galaxy S 20","Samsung",10048,"Azul",true,5,945);

let arrayMobile2:Mobile[] = [ztc,ericson,samsung2];
let libreria2:MobileLibrary = new MobileLibrary("Teléfonos de mi hermano","Su cajón",arrayMobile2);

libreria2.printLibrary();