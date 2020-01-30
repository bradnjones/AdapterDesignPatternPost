import {ProductSystem} from './ProductSystem';
import {IProducts} from './IProducts';

export class ProductsAdapter implements IProducts{
    private _api = new ProductSystem();

    public displayProducts(): string[]{
        return this._api.retrieveProductsArray();
    }
}