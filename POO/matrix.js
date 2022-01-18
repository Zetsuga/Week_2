let libreria = require("./vector");

class Matrix{
    
    constructor(n,m,k){
        this.arrayMatriz =[];
        for(let i=0; i<m;i++){
            let temporal = new libreria.Vector(n,k);
            this.arrayMatriz.push(temporal);
        }
    }

    add(m){
        if(m.arrayMatriz.length == this.arrayMatriz.length){
            let temporal =[];
            let final =[];
            for(let i=0; i<this.arrayMatriz.length;i++){
                for(let j=0;j<this.arrayMatriz[i].arrayNumero.length; j++){
                    temporal.push(this.arrayMatriz[i].arrayNumero[j] + m.arrayMatriz[i].arrayNumero[j]);
                }
                final.push(temporal);
                temporal=[];
                
            }
            return final;
        }else{
            return 0;
        }
    }

    productNum(n){
        let temporal =[];
        let final =[];
        for(let i=0; i<this.arrayMatriz.length;i++){
            for(let j=0;j<this.arrayMatriz[i].arrayNumero.length; j++){
                temporal.push(this.arrayMatriz[i].arrayNumero[j] * n);
            }
            final.push(temporal);
            temporal=[];
            
        }
        return final;
    }

    subs(m){
        if(m.arrayMatriz.length == this.arrayMatriz.length){
            let temporal =[];
            let final =[];
            for(let i=0; i<this.arrayMatriz.length;i++){
                for(let j=0;j<this.arrayMatriz[i].arrayNumero.length; j++){
                    temporal.push(m.arrayMatriz[i].arrayNumero[j] - this.arrayMatriz[i].arrayNumero[j]);
                }
                final.push(temporal);
                temporal=[];
                
            }
            return final;
        }else{
            return 0;
        }
    }

    product(m){
        if(m.arrayMatriz.length == this.arrayMatriz.length){
            let temporal =[];
            let final =[];
            for(let i=0; i<this.arrayMatriz.length;i++){
                for(let j=0;j<this.arrayMatriz[i].arrayNumero.length; j++){
                    temporal.push(this.arrayMatriz[i].arrayNumero[j] * m.arrayMatriz[i].arrayNumero[j]);
                }
                final.push(temporal);
                temporal=[];
                
            }
            return final;
        }else{
            return 0;
        }
    }

    imprimir(){
        for(let i=0; i<this.arrayMatriz.length;i++){
                console.log(this.arrayMatriz[i]);
        }
    }
        
}

module.exports = {Matrix};