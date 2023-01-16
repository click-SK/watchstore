class Products{
    constructor(){
        this.classNameActive = 'main-section__item_btn_active';
        this.labelAdd = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="29" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                         <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                         </svg> Buy`;
        this.labelRemove = 'take out';
    }


        //----------button (add goods to shopping cart)-------///
    handleSetLocationStorage(element, id, count, name){
        const {pushProduct, products} = localStorageUtil.putProducts(id, count, name);
        

        if (pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        } 
        
        headerPage.render(products.length);
    }



    onClickScroll(){
        window.scrollTo(0, 0); 
    }
 


    
    
    render(event) {

        const productsStore = localStorageUtil.getProducts('');
        let htmlCatalog = '';
        let mainTitle = 'popular goods'
        

        CATALOG.splice (12);
     
        CATALOG.forEach((el) =>{
            
            
           let activeClass = '';
           let activeText = '';
    
           if (productsStore.indexOf(el.id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <a id="${el.id}" class="main-section__item" >
                <img  class="main-section__item_img" src="${el.img}" alt="${el.altImg}" onclick = "productsPage.handleRenderGoods(${el.id}); productsPage.onClickScroll();"  >
                <h2 class="main-section__item_title" onclick = "productsPage.handleRenderGoods(${el.id});">${el.name}</h2>
                <div class="main-section__item_prise-butt">
                    <div class="main-section__item_prise" onclick = "productsPage.handleRenderGoods(${el.id});">${el.price}$</div>
                    <button class="main-section__item_btn btn_primery ${activeClass}" 
                    onclick = "productsPage.handleSetLocationStorage(this, '${el.id}','${el.counter}','${el.name}');">  
                        ${activeText}
                    </button>
                </div>
            </a>
            `

        })
        

        const html = `
            <section class="main-section"> 
                <title class="main-section__title" >${mainTitle}</title>
                <div class="main-section__goods">
                ${htmlCatalog} 
                </div>
            </section>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
    handleRenderGoods(goodsItem){
        goodsPage.render(goodsItem);
        
        ROOT_PRODUCTS.innerHTML = "";
    }
}

const productsPage = new Products();
// productsPage.render();

