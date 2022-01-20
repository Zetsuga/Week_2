//EJERCICIO 1
function zodiaco(dia:number,mes:string):void{
    if((dia >=21 && mes == "marzo") || (dia <=20 && mes == "abril")){
        console.log("Aries");
    }else if((dia >=21 && mes == "abril") || (dia <=20 && mes == "mayo")){
        console.log("Tauro");
    }else if((dia >=21 && mes == "mayo") || (dia <=21 && mes == "junio")){
        console.log("Geminis");
    }else if((dia >=22 && mes == "junio") || (dia <=21 && mes == "julio")){
        console.log("Cancer");
    }else if((dia >=22 && mes == "julio") || (dia <=23 && mes == "agosto")){
        console.log("Leo");
    }else if((dia >=24 && mes == "agosto") || (dia <=23 && mes == "septiembre")){
        console.log("Virgo");
    }else if((dia >=24 && mes == "septiembre") || (dia <=23 && mes == "octubre")){
        console.log("Libra");
    }else if((dia >=24 && mes == "octubre") || (dia <=22 && mes == "noviembre")){
        console.log("Escorpio");
    }else if((dia >=23 && mes == "noviembre") || (dia <=21 && mes == "diciembre")){
        console.log("Sagitario");
    }else if((dia >=22 && mes == "diciembre") || (dia <=20 && mes == "enero")){
        console.log("capricornio");
    }else if((dia >=21 && mes == "enero") || (dia <=19 && mes == "febrero")){
        console.log("Acuario");
    }else if((dia >=20 && mes == "febrero") || (dia <=20 && mes == "marzo")){
        console.log("Piscis");
    }
}



//EJERCICIO 2

function continente(ciudad:string):void{
    if(ciudad == "españa" || ciudad == "italia" || ciudad == "inglaterra" || ciudad == "alemania" || ciudad == "bruselas"){
        console.log("Europa");
    }else if(ciudad == "japon" || ciudad == "china" || ciudad == "mongolia" || ciudad == "tailandia" || ciudad == "india"){
        console.log("Asia");
    }else if(ciudad == "argelia" || ciudad == "libia" || ciudad == "egipto" || ciudad == "nigeria" || ciudad == "camerun"){
        console.log("Africa");
    }else if(ciudad == "chile" || ciudad == "argentina" || ciudad == "uruguay" || ciudad == "mexico" || ciudad == "canada"){
        console.log("America");
    }else if(ciudad == "Austraia" || ciudad == "Filipinas" || ciudad == "Plaos" || ciudad == "Islas salomon" || ciudad == "Nueva Zelanda"){
        console.log("Oceania");
    }else{
        console.log("Antartida");
    }
}

//EJERCICIO 9 

function par(numero:number):void{
    (numero%2==0)?console.log("El númeroes Par"):console.log("El númeroes Impar");

}

zodiaco(21,"febrero");
continente("españa");
par(36);
