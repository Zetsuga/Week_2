//EJERCICIO 3
function imparesNNumeros(numero) {
    for (var i = 0; i <= numero; i++) {
        if (i % 2 != 0)
            console.log(i);
    }
}
//EJERCICIO 4
function revesArray(array) {
    var arrayReves = [];
    for (var i = 0; i < array.length; i++) {
        arrayReves.push(array[array.length - (i + 1)]);
    }
    console.log(arrayReves);
}
//EJERCICIO 5
function arcoiris(array) {
    for (var color in array) {
        if (array[color] == "rojo" || array[color] == "naranja" || array[color] == "amarillo"
            || array[color] == "verde" || array[color] == "añil" || array[color] == "azul" || color == "violeta") {
            console.log("El color ".concat(array[color], " si est\u00E1 en el arco iris"));
        }
        else {
            console.log("El color ".concat(array[color], " no est\u00E1 en el arco iris"));
        }
    }
}
//EJERCICIO 8
function sumaCaracteres(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i].length;
    }
    return suma;
}
function parNumero(numero) {
    (numero % 2 == 0) ? console.log("El número es Par") : console.log("El número es Impar");
}
//EJERCICIO 10
function parString(array) {
    var suma = sumaCaracteres(array);
    parNumero(suma);
}
imparesNNumeros(121);
revesArray([1, 2, 3, 4, 5]);
arcoiris(["verde", "amarillo", "rosa Palo", "blanco roto", "rojo"]);
console.log(sumaCaracteres(["Manolo", "Maite", "Farina", "Marisa"]));
parString(["Casa", "Coche", "Ciudad", "Cestas"]);
parString(["Barco", "Baca", "Bicicleta", "Balon", "Bisisesto", "Brasil"]);
parString(["Venezuela", "Veneno", "Voltaje"]);
