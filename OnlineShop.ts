import {ProductsAdapter} from './ProductsAdapter';
import {ProductListings} from './ProductListings';

(function init(){
    let adapter = new ProductsAdapter();
    let listings = new ProductListings(adapter);
    let productData = listings.handleDisplayProducts();
    let formattedData = formatProductDataForOnlineStore(productData);
    printFormattedData(formattedData);
})();

function formatProductDataForOnlineStore(productData){
    return productData.map(aProduct => {
        return `<span>${aProduct}</span>`;
    });
}

function printFormattedData(formattedProductData){
    formattedProductData.forEach(item =>{
        console.log(item);
    });
}