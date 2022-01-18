class Contacts{
    
    constructor(){
        this.arrayPersonas = [];
    }

    printPersonas(){
        for(let i=0; i<this.arrayPersonas.length;i++){
            for(let atributo in this.arrayPersonas[i]){
                console.log(atributo + " - " + this.arrayPersonas[i][atributo]);
            }
        }
    }
}

module.exports = {Contacts};