import { Punto } from "./punto";

export class Triangulo{

    private x:Punto;
    private y:Punto;
    private z:Punto;
    
    public constructor(x:Punto,y:Punto,z:Punto){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    public calcularLongitudLados():number[]{
        let lados:number[] = [];
        lados[0] = this.x.calcularDistancia(this.y);
        lados[1] = this.x.calcularDistancia(this.z);
        lados[2] = this.y.calcularDistancia(this.z);
        return lados;
    }
}