//EJERCICIO 6
function parWhile(array:number[]):void{
    let encontrado:boolean = false;
    let i:number =0;

    while(!encontrado && i<array.length){
        if(array[i]%2 == 0){
            encontrado = true;
        }
        i++;
    }

    (encontrado)?console.log("Si hay un par"):console.log("No hay un par");
}

//EJERCICIO 7
function nombres(array:string[]):void{
    let encontrado:boolean = true;
    let i:number = 0;
    while(encontrado && i<array.length){
        if(array[i][0] != "M"){
            encontrado = false;
        }
        i++;
    }
    (encontrado)?console.log("Todos empiezan por la M"):console.log("No todos comienzan por la M");
}

parWhile([5,7,9,7,2,1]);
nombres(["Manolo","Maite","Farina","Marisa"]);