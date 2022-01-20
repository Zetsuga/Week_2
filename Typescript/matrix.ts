import { Vector } from "./vector";

export class Matrix{

    private elements:Vector[];

    public constructor(n:number,m:number,k:number){
        this.elements = [];
        for(let i =0; i<n; i++){
            this.elements.push(new Vector(m,k));
        }
    }

    public print():void{
        for(let i = 0; i<this.elements.length;i++){
            this.elements[i].print();
        }
    }

    public add(m1:Matrix):Matrix{
        let temporal:Matrix = new Matrix(1,1,1);
        temporal.elements = [];
        for(let i=0;i<this.elements.length;i++){
            temporal.elements.push(this.elements[i].add(m1.elements[i]));
        }
        return temporal;
    }

    public multNumber(n:number):Matrix{
        let temporal:Matrix = new Matrix(1,1,1);
        temporal.elements = [];
        for(let i=0;i<this.elements.length;i++){
            temporal.elements.push(this.elements[i].multNumber(n));
        }
        return temporal;
    }

    public mutSpecial(n:Number):void{
        let temporal:Matrix = new Matrix(1,1,1);
        temporal.elements = [];
        let aux:number[] = [];

        for(let i=0;i<this.elements.length;i++){
            for(let j=0;j<this.elements[i].getElements().length;j++){
                if(this.elements[i].getElements()[j] % 2 == 0){
                    aux.push(this.elements[i].getElements()[j] * n);
                }else{
                    aux.push(this.elements[i].getElements()[j] * (n-1));
                }
            }
            temporal.elements.push(aux);
        }
    }
}