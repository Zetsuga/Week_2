import {Book} from "./book";
import {Library} from "./library";

let libro1:Book = new Book("Introducción a Javascript",23,
    "2344433-BC23333","Joseph Smith","Now Editions");
let libro2:Book = new Book("Harry potter: El prisionero de Azkaban",380,
    "2698574-DC58987","Jk. Rolling","Salamandra");
let libro3:Book = new Book("La muerte de un superheroe",220,
    "5897326-AR67256","Anthony Mc Carten","RBA");
let arrayLibros:Book[] =[libro1,libro2,libro3]; 

let biblioteca:Library = new Library("Pasaje de chinitasd 4", "JaviYuki",arrayLibros);
console.log(biblioteca.toString());
console.log(biblioteca.getNumberOfBooks());
biblioteca.findByAuthor("Jk. Rolling");