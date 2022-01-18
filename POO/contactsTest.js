let libreria = require("./person");
let libreria2 = require("./contacts");

let hobby1 = ["Juegos de mesa", "videojuegos","programacion"];
let persona1 =  new libreria.Person("Jose",1981,111,175,"gris",hobby1);

let hobby2 = ["Juegos de mesa", "videojuegos","Leer"];
let persona2 =  new libreria.Person("Oli",1984,115,162,"marron",hobby2);

let agenda = new libreria2.Contacts();
agenda.arrayPersonas.push(persona1);
agenda.arrayPersonas.push(persona2);
agenda.printPersonas();