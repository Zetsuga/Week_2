let libreria = require("./matrix");

let matriz1 = new libreria.Matrix(5,3,2);
matriz1.imprimir();
let matriz2 = new libreria.Matrix(5,3,2);
matriz2.imprimir();

let suma = matriz1.add(matriz2);
if(suma !=0){
    console.log(suma);
}else{
    console.log("Las matrices no son iguales y no se pueden sumar");
}

let productoNumero = matriz1.productNum(2);
console.log(productoNumero);


let resta = matriz1.subs(matriz2);
if(resta != 0){
    console.log(resta);
}else{
    console.log("Las matrices no son iguales y no se pueden restar");
}

let producto = matriz1.product(matriz2);
if(producto != 0){
    console.log(producto);
}else{
    console.log("Las matrices no son iguales y no se pueden multiplicar");
}