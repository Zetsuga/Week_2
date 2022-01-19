import {Book} from "./book";

export class Library{

    private books:Book[];
    private address: string;
    private manager: string;


    public constructor(address:string,manager:string,books:Book[]){
        this.address = address;
        this.manager = manager;
        this.books = books;
    }
    
    public toString(): string{
        let texto:string ="";
        let contador:number = 1;
        for(let libro of this.books){
            texto+= `Book${contador}:\n${libro.toString()}\n`;
            contador++;
        }
        return texto;
    }

    public getNumberOfBooks():number{
        return this.books.length;
    }

    public findByAuthor(author:string):Book[]{
        return this.books.filter(autor =>{
            if(autor.getAuthor() == author){
                console.log((autor.toString()));
            }
        });
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string) {
        this.address = address;
    }

    public getManager(): string {
        return this.manager;
    }

    public setManager(manager: string) {
        this.manager = manager;
    }
}