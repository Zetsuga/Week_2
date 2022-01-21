export class Punto{
    
    private x: number;
    private y: number;

    public constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }

    public toString():void{
        console.log(`(${this.x},${this.y})`);
    }

    public distanciaAlOrigen():number{
        let distancia:number = 0;
        distancia = Math.sqrt((this.x*this.x) + (this.y*this.y));
        return distancia;
    }

    public calcularDistancia(otroPunto:Punto):number{
        let distancia:number = 0;
        distancia = Math.sqrt(Math.pow((this.x-otroPunto.getX()),2) + Math.pow((this.y-otroPunto.getY()),2));
        return distancia;
    }

    public calcularCuadrante():number{
        let cuadrante:number = 0;
        if(this.x==0 || this.y==0){
            cuadrante = 0;
        }else if(this.x>0 && this.y>0){
            cuadrante = 1;
        }else if(this.x<0 && this.y>0){
            cuadrante = 2;
        }else if(this.x<0 && this.y<0){
            cuadrante = 3;
        }else if(this.x>0 && this.y<0){
            cuadrante = 4;
        }

        return cuadrante;
    }

    public calcularMasCercano(puntos:Punto[]):Punto{
        let cercano:number = null;
        let puntoOrigen: Punto = new Punto(this.getX(),this.getY());
        for(let i = 0;i<puntos.length;i++){
            if(cercano == null || Math.abs(puntos[cercano].calcularDistancia(puntoOrigen)) 
            > Math.abs(puntos[i].calcularDistancia(puntoOrigen))){
                cercano = i
            }
        }
        return puntos[cercano];
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number) {
        this.x = x;
    }
    
    public getY(): number {
        return this.y;
    }

    public setY(y: number) {
        this.y = y;
    }
}