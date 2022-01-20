//EJERCICIO 3

function imparesNNumeros(numero:number):void{
    for (let i = 0; i<= numero; i++){
        if(i%2 != 0)
            console.log(i);
    }
}

//EJERCICIO 4
function revesArray(array:number[]):void{
    let arrayReves:number[] =[];
    for(let i = 0; i<array.length; i++){
        arrayReves.push(array[array.length - (i+1)]);
    }
    console.log(arrayReves);
}

//EJERCICIO 5
function arcoiris(array:string[]):void{
    for(let color in array){
        if(array[color] == "rojo" || array[color] == "naranja" || array[color] == "amarillo" 
        || array[color] == "verde" || array[color] == "añil" || array[color] == "azul" || color == "violeta" ){
            console.log(`El color ${array[color]} si está en el arco iris`);
        }else{
            console.log(`El color ${array[color]} no está en el arco iris`);
        }
    }
}

//EJERCICIO 8
function sumaCaracteres(array:string[]):number{
    let suma:number = 0;
    for(let i = 0;i<array.length;i++){
        suma += array[i].length;
    }
    return suma;
}
function parNumero(numero:number):void{
    (numero%2==0)?console.log("El número es Par"):console.log("El número es Impar");

}

//EJERCICIO 10
function parString(array:string[]):void{
    let suma:number = sumaCaracteres(array);

    parNumero(suma);
}

imparesNNumeros(121);
revesArray([1,2,3,4,5]);
arcoiris(["verde","amarillo","rosa Palo","blanco roto","rojo"]);
console.log(sumaCaracteres(["Manolo","Maite","Farina","Marisa"]));
parString(["Casa","Coche","Ciudad","Cesta"]);
parString(["Barco","Baca","Bicicleta","Balon","Bisisesto","Brasil"]);
parString(["Venezuela","Veneno","Voltaje"]);