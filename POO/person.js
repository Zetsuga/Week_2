class Person{
    constructor(nombre, yearOfBird,peso,altura,colorPelo,hobby){
        this.nombre = nombre;
        this.yearOfBird = yearOfBird;
        this.peso = peso;
        this.altura = altura;
        this.colorPelo= colorPelo;
        this.hobby = hobby;
    }

    calcularIMC(){
        return this.peso/((this.altura/100)*(this.altura/100));
    }

    edad(){
        return 2022 - this.yearOfBird;
    }

    printAll(){
        for(let atributo in this){
            console.log(atributo + " - " + this[atributo]);
        }
    }

    printHobbies(){
        console.log(`Los hobby de ${this.nombre} son: ${this.hobby}`);
    }
}

module.exports = {Person};