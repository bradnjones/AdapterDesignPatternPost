export class ProductSystem {
    private _products: string[];

    constructor(){
        this._products = [
            'Samsung HD TV',
            'Exercise Bike',
            'Lenovo ThinkPad',
            'Broncos Jersey'
        ]
    }

    retrieveProductsArray(): string[] {
        return this._products;
    }
}