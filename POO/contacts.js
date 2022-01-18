class Contacts{
    
    constructor(){
        this.arrayPersonas = [];
    }

    printPersonas(){
        for(let i=0; i<this.arrayPersonas.length;i++){
            this.arrayPersonas[i].printAll();
        }
    }
}

module.exports = {Contacts};