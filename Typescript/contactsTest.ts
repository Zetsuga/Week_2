import {Person} from "./person";
import {Contacts} from "./contacts";

let Jose:Person = new Person("Jose",40,"Mi casa que no es de otro");
let Oliver:Person = new Person("Oliver",37,"Pasaje Mendiv 3");
let Javi:Person = new Person("Javi",30,"en campanillas");

let agenda:Contacts = new Contacts();
agenda.people.push(Jose);
agenda.people.push(Oliver);
agenda.people.push(Javi);

agenda.printCalendar();