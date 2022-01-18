let libreria = require("./vector");

let array1 = new libreria.Vector(4,5);
let array2 = new libreria.Vector(4,3);

let suma = array1.add(array2);
if(suma !=0){
    console.log(suma);
}else{
    console.log("Los vectores no son iguales y no se pueden sumar");
}

let productoNumero = array1.productNum(2);
console.log(productoNumero);


let resta = array1.subs(array2);
if(resta != 0){
    console.log(resta);
}else{
    console.log("Los vectores no son iguales y no se pueden restar");
}

let producto = array1.product(array2);
if(producto != 0){
    console.log(producto);
}else{
    console.log("Los vectores no son iguales y no se pueden multiplicar");
}