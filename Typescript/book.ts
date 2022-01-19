export class Book{

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    public constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public toString(): string{
        return `Title - ${this.getTitle()}\n`+
            `Number o Pages - ${this.getNPages()}\n` +
            `ISBN - ${this.getIsbn()}\n` +
            `Author - ${this.getAuthor()}\n` +
            `Editorial - ${this.getEditorial()}\n`;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getNPages(): number {
        return this.nPages;
    }

    public setNPages(nPages: number) {
        this.nPages = nPages;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(isbn: string) {
        this.isbn = isbn;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setAuthor(author: string) {
        this.author = author;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(editorial: string) {
        this.editorial = editorial;
    }
}