import { Mobile } from "./mobile";

export class MobileLibrary{
    private name: string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    public constructor(name:string,location:string,mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    public totalPriceCalculation():number{
        let suma:number = 0;
        for(let movil in this.mobiles){
            suma += this.mobiles[movil].getPrice();
        }
        return suma;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(location: string) {
        this.location = location;
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    public setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles;
    }
}