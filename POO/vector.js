class Vector{
    constructor(n,m){
        this.arrayNumero =[];
        for(let i = 0; i<n;i++){
            this.arrayNumero.push(Math.floor(Math.random()*(m+1)));
        }
    }

    add(a){
        if(a.arrayNumero.length == this.arrayNumero.length){
            let temporal =[];
            for(let i=0; i<this.arrayNumero.length;i++){
                temporal.push(this.arrayNumero[i] + a.arrayNumero[i]);
            }
            return temporal;
        }else{
            return 0;
         }
    }
    

    productNum(n){
        let temporal =[];
        for(let i=0; i<this.arrayNumero.length;i++){
            temporal.push(this.arrayNumero[i] * n);
        }
        return temporal;
    }

    subs(a){
        if(a.arrayNumero.length == this.arrayNumero.length){
            let temporal =[];
            for(let i=0; i<this.arrayNumero.length;i++){
                temporal.push(a.arrayNumero[i] - this.arrayNumero[i]);
            }
            return temporal;
        }else{
            return 0;
        }
    }

    product(a){
        if(a.arrayNumero.length == this.arrayNumero.length){
            let temporal =[];
            for(let i=0; i<this.arrayNumero.length;i++){
                temporal.push(a.arrayNumero[i] * this.arrayNumero[i]);
            }
            return temporal;
        }else{
            return 0;
        } 
    }

}

module.exports={Vector};