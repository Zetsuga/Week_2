let libreria = require("./person");

let hobby = ["Juegos de mesa", "videojuegos","programacion"];
let persona =  new libreria.Person("Jose",1981,111,175,"marron",hobby);

console.log(`El indice de masa corporal de ${persona.nombre} es ${persona.calcularIMC()}`);
console.log(`La edad de ${persona.nombre} es ${persona.edad()}`);
persona.printAll();
persona.printHobbies();