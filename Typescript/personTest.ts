import {Person} from "./person";

let Jose:Person = new Person("Jose",40,"Mi casa que no es de otro");

Jose.printName();
console.log(Jose.yearOfBirth(2021));
console.log(Jose.getAddress());
Jose.setAddress("Pasaje Mendivil 3");
console.log(Jose.getAddress());