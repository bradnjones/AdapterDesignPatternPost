import {IProducts} from './IProducts';

export class ProductListings {

    private _products: IProducts;

    constructor(someProducts: IProducts){
        this._products = someProducts;
    }

    public handleDisplayProducts(): string[]{
        return this._products.displayProducts();
    }
}