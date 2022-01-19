import {Person} from "./person";

export class Contacts{
    
    public people:Person[];

    public constructor(){
        this.people = [];
    }

    public printCalendar(){
        for(let persona in this.people){
            console.log(`Nombre: ${this.people[persona].name}\n`
            +`Años: ${this.people[persona].age}\n` +
            `Direccion: ${this.people[persona].getAddress()}\n`)
        }
    }
}