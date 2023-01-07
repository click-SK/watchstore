

    

class Shoping{

    // закриття корзини, шляхом переписання сторінки рендера
    handleClear(e){
        ROOT_SHOPPING.innerHTML = "";
        
    }

    handleClick = (e) =>{
        if (e.target.id == 'shoping_basket'){
            ROOT_SHOPPING.innerHTML = "";
        } else {
            // console.log("not")
        }
        
    };

    // //лічильник першого товару
    // handleClickCounerPlus(){
    //     const countCurent = document.querySelector('[data-counter]');
        
    //         countCurent.innerText = ++countCurent.innerText;

        
    // }   ; 
    
    // handleClickCounerMinus(){
    //     const countCurent = document.querySelector('[data-counter]');
    //     if (parseInt(countCurent.innerText) > 1) {
    //     countCurent.innerText = --countCurent.innerText;
    //     } 
    // };

    // лічильник всіх товарів

    handleCounterAll(){
        window.addEventListener('click', function(event){
            if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
                let storageCount = [];
                const counterBlock = event.target.closest('.shoping-card__item');
                const countCurent = counterBlock.querySelector('[data-counter]');
                const itemSum = counterBlock.querySelector('.goods-price');
                const totalSumm = counterBlock.querySelector('.shoping-card__total-price');
                const basketSum = document.querySelector('.total__sum-basket');
                
                
                // console.log(event.target.dataset.action);
                    if(event.target.dataset.action === 'plus'){        

                        countCurent.innerText = ++countCurent.innerText;
                        

                        storageCount = [
                            {
                                name: counterBlock.querySelector('.goods-name'),
                                count: countCurent.innerText
                            }
                        ]

                        totalSumm.innerHTML = (parseInt(itemSum.innerText) * parseInt(countCurent.innerText))+ " USD";
                        // const itemSumAll = document.querySelectorAll('.shoping-card__total-price');
                        basketSum.innerHTML = (parseInt(basketSum.innerText) +  parseInt(itemSum.innerText)) + "USD";
                    }
                    if(event.target.dataset.action === 'minus'){

                        if (parseInt(countCurent.innerText) > 1) {
                            countCurent.innerText = --countCurent.innerText;
                            if(totalSumm.innerHTML !== itemSum.innerText ){
                                totalSumm.innerHTML = (parseInt(totalSumm.innerText) - parseInt(itemSum.innerText))+ " USD";
                                basketSum.innerHTML = (parseInt(basketSum.innerText) -  parseInt(itemSum.innerText)) + "USD";
                            }
                        } 
                    }
                    // localStorage['mycount'] = JSON.stringify(storageCount);
                    
            }
                
            
        })
    };


    HendelPushProduct(event){


        const checkOut = document.querySelector('[data-check]');

        let setItem = [];
        const setCount = document.querySelector('.item__curent');
        const productsStore = localStorageUtil.getProducts('');


        CATALOG.forEach((el) =>{
            if (productsStore.indexOf(el.id) !==-1 ) {

                
                    setItem.push(
                        {
                            id:el.id,
                            name: el.name,
                            price: el.price,
                            count: setCount.innerText
                        }
                        );
                
                
                let itembasket = localStorage.setItem('itembasket', JSON.stringify(setItem));   
               
                
            } 
        });

        
;
        

       
    };

    render() {
        let htmlShoping = '';

        const productsStore = localStorageUtil.getProducts('');
        let htmlCatalog = '';
        let totalSum = 0; 




        CATALOG.forEach((el) =>{
            if (productsStore.indexOf(el.id) !==-1 ) {
                htmlCatalog += `
                <div  id="${el.id}" class="shoping-card__item" data-id="${el.id}">
                <img class="shoping-card__img" src="${el.img}" alt="${el.altImg}">
                        <div class="shoping-card__goods">
                            <div class="goods-name"> ${el.name} </div>
                            <div class="goods-price"> ${el.price.toLocaleString()} USD </div>
                        </div>
                        <div class="shoping-card__counter"> 
                            <div id="action" class="item__control counter--minus" data-action="minus">-</div>
                            <div id="curent" class="item__curent" data-counter>1</div>
                            <div class="item__control counter--plus" data-action="plus">+</div>
                        </div>
                        <div class="shoping-card__total-price">${el.price.toLocaleString()} USD</div>
                        <button id="del" class="shoping-card__total-del" onclick = "productsPage.handleSetLocationStorage(this, '${el.id}'); shopingPage.render(); productsPage.render();"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg> 
                        </button>
                </div>
                `
                totalSum += el.price;
                
            }
        });

           
        htmlShoping += `
        <div id= "shoping_basket" class="shoping-page" onclick="shopingPage.handleClick(event);">
            <div class="shoping-cart">
                <title class="shoping-card__title">shopping cart</title>
                <div class="shoping-card__block">
                    <div class="shoping-card__items">${htmlCatalog}</div>
                        <div class="shoping-card__total">
                        <p>total</p> 
                        <p class="total__sum-basket">${totalSum.toLocaleString()} USD</p> 
                    </div>
                    <div class="shoping-card__buttons">
                        <button class="shoping-card__button shoping-card__button--prime btn_primery" data-check onclick="shopingPage.HendelPushProduct(event);">checkout</button>
                        <button class="shoping-card__button shoping-card__button--second btn_secondary" onclick="shopingPage.handleClear();">continue shopping</button>
                    </div>    
                </div>
            </div>
        </div>

            `

        ;

        ROOT_SHOPPING.innerHTML = htmlShoping;
        shopingPage.handleCounterAll();
                //counter//

    }
    
}

const shopingPage = new Shoping();
// shopingPage.render();

