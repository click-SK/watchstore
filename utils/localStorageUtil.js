class LocalStorageUtil{
    constructor() {
        this.keyName = 'products';
    }

    getProducts(){
        const productsLocalStorege = localStorage.getItem(this.keyName);
        if( productsLocalStorege !== null ) {
            return JSON.parse(productsLocalStorege);
        }
        return [];
    }

    putProducts(id, count, name){
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);
 
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice (index, 1);
        }
        
        localStorage.setItem(this.keyName, JSON.stringify(products));
        // JSON.stringify(products)
        return {
            pushProduct, 
            products
            
        }
        
    }
}

const localStorageUtil = new LocalStorageUtil();







