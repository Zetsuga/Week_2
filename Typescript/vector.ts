export class Vector{

    private elements: number[];
    
    constructor(n:number,k:number){
        this.elements = [];
        for(let i=0;i<n;i++){
            this.elements.push(Math.floor(Math.random()*(k+1)));
        }
    }

    public print():void{
        console.log(this.elements);
    }

    public add(v1:Vector):Vector{
        let temporal:Vector = new Vector(1,1);
        temporal.elements =[];
        for(let i=0; i<this.elements.length;i++){
            temporal.elements.push(this.elements[i] + v1.elements[i]);
        }
        return temporal;
    }

    public subs(v1:Vector):Vector{
        let temporal:Vector = new Vector(1,1);
        temporal.elements =[];
        for(let i=0; i<this.elements.length;i++){
            temporal.elements.push(this.elements[i] - v1.elements[i]);
        }
        return temporal;
    }

    public mult(v1:Vector):Vector{
        let temporal:Vector = new Vector(1,1);
        temporal.elements =[];
        for(let i=0; i<this.elements.length;i++){
            temporal.elements.push(this.elements[i] * v1.elements[i]);
        }
        return temporal;
    }

    public multNumber(n:number):Vector{
        let temporal:Vector = new Vector(1,1);
        temporal.elements =[];
        for(let i=0; i<this.elements.length;i++){
            temporal.elements.push(this.elements[i] * n);
        }
        return temporal;
    }

    public getElements(): number[] {
        return this.elements;
    }

    public setElements(elements:number[]): void {
        this.elements = elements;
    }
}