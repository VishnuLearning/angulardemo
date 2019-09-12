export class Topping {
    name: string;
    imageurl: string;
    cost: number;

    toString():string {
        return `${this.name} [Rs. ${this.cost}]`;
    }
    
    constructor(name:string, imageurl:string, cost:number) {
        this.name = name;
        this.imageurl = imageurl;
        this.cost = cost;
    }
    
}