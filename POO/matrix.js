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
            let final =[];
            for(let i=0; i<this.arrayMatriz.length;i++){
                final.push(this.arrayMatriz[i].add(m.arrayMatriz[i]));
            }
            return final;
        }else{
            return 0;
        }
    }

    productNum(n){
        let final =[];
        for(let i=0; i<this.arrayMatriz.length;i++){
            final.push(this.arrayMatriz[i].productNum(n));
        }
        return final;
    }

    subs(m){
        if(m.arrayMatriz.length == this.arrayMatriz.length){
            let final =[];
            for(let i=0; i<this.arrayMatriz.length;i++){
                final.push(this.arrayMatriz[i].subs(m.arrayMatriz[i]));
            }
            return final;
        }else{
            return 0;
        }
    }

    product(m){
        if(m.arrayMatriz.length == this.arrayMatriz.length){
            let final =[];
            for(let i=0; i<this.arrayMatriz.length;i++){
                final.push(this.arrayMatriz[i].product(m.arrayMatriz[i])); 
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