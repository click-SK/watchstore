class Goods{

    testHref(id){
        CATALOG.forEach((el)=>{
            if (id == el.id){
                
            el.allImg.forEach((srcImg)=>{
                console.log(srcImg);
            })
            }
        })
    }

    // activeClassClick(){
    //     let imgMin = document.getElementById('img-min');
    //     if (img.classList.contains())
    // }

    hendlerClickChangeImg(){
         document.body.onclick = function(event){
                event = event || window.event;
                // console.log(event.target.classList.contains('item-img__second'));
                if (event.target.classList.contains('item-img__second')){
                    // let allDivs = document.querySelectorAll('.item-img__second')
                    // for (let i=0; i<allDivs.length; i++){
                    //     if (event.target.classList.contains('item-img__second--active')){
                    //         allDivs[i].classList.remove('item-img__second--active'); 
                    //     } else if (!event.target.classList.contains('item-img__second--active')){
                    //         allDivs[i].classList.add('item-img__second--active')
                    //     } 

                    // }
                    document.getElementById('img-max').src = event.target.src;
                } 
            };
    }

    clickAddClass(){
            let imgSecondClass = document.querySelector('.item-img__second');
            let imgActiveClass = document.querySelector('.item-img__second--active')
            if (imgSecondClass.classList.contains('item-img__second--active')) {
                imgActiveClass.classList.remove('item-img__second--active')
            } imgSecondClass.classList.add('item-img__second--active')
        
    }


    render(goodsItem){
        let htmlGoods = '';
        let goodsImg = '';
        let goodsImgSecond = '';
        

            CATALOG.forEach((el) => {


                if (goodsItem == el.id){
                    el.allImg.splice(4)
                    el.allImg.forEach((srcImg)=>{
                        goodsImgSecond += `
                        <img id="img-min" class="item-img__second " onclick="goodsPage.hendlerClickChangeImg(); goodsPage.clickAddClass()" src="${srcImg}" alt="${srcImg}">
                        `
                    })
        

                    
                    goodsImg +=`
                        <div class="item-img">
                            <img id="img-max" class="item-img__main" src="${el.img}" alt="${el.img}">
                            <div class="item-img__second-block">
                                ${goodsImgSecond}
                            </div>
                        </div>
                    `;

                    
                    htmlGoods += ` 
                    <section class="goods-page">
                        <div class="nav-str nav-str-position"> 
                        <span class="click__back" onclick="goodsPage.handleRenderproductsPage()"> < </span>
                        <span class="nav-str__item" onclick="goodsPage.handleRenderproductsPage()"> Home </span>
                        <span class="nav-str__item"> ${el.categories} </span>
                        <span class="nav-str__item"> ${el.name} </span>
                        </div>
                        <div class="goods-page__item">
                            ${goodsImg}
                        <div class="description-block">
                        <div class="description-block__info">
                        <h2>${el.name}</h2>
                        <p>${el.description}</p>
                        </div>
                        <div class="description-block__specifications">
                        <h3>MECHANISM</h3>
                        <div class="description-block__specifications-value">
                        <p class="key">Movement type:</p>
                        <p class="value">${el.mechanism}</p>
                        </div>
                        </div>
                        <div class="description-block__specifications">
                        <h3>CASE</h3>
                        <div class="description-block__specifications-value">
                        <p class="key">Case sizel:</p>
                        <p class="value">${el.CaseSize}</p>
                        </div>
                        <div class="description-block__specifications-value">
                        <p class="key">Case color:</p>
                        <p class="value">${el.Casecolor}</p>
                        </div>
                        <div class="description-block__specifications-value">
                        <p class="key">Hull shape:</p>
                        <p class="value">${el.Hullshape}</p>
                        </div>
                        <h3>STRAP</h3>
                        <div class="description-block__specifications-value">
                        <p class="key">Strap length:</p>
                        <p class="value">${el.Straplength}</p>
                        </div>
                        <div class="description-block__specifications-value">
                        <p class="key">Strap color:</p>
                        <p class="value">${el.Strapcolor}</p>
                        </div>
                        <div class="description-block__specifications-value">
                        <p class="key">Strap material:</p>
                        <p class="value">${el.Strapmaterial}</p>
                        </div>
                        <h3>MATERIAL</h3>
                        <div class="description-block__specifications-value">
                        <p class="key">Housing material:</p>
                        <p class="value">${el.Housingmaterial}</p>
                        </div>
                        <div class="description-block__specifications-value">
                        <p class="key">Strap material:</p>
                        <p class="value">${el.Strapmaterial}</p>
                        </div>
                        <div class="description-block__specifications-value">
                        <p class="key">Glass:</p>
                        <p class="value">${el.Glass}</p>
                        </div>
                        </div>
                        <div class="description-block__specifications">
                        <h3>WATCH FUNCTIONS</h3>
                        <div class="description-block__specifications-value">
                        <p class="key">Functions:</p>
                        <p class="value">${el.watchfunctions}</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div class="goods-page__info">
                        <div class="info-goods__block">
                                <div class="info-goods__name">
                                <h2>${el.name}</h2>
                                <div class="info-goods-block">
                                <div class="info-goods">
                                <p class="model__key">Model: </p>
                                <p class="model__value" style="margin-left: 5px;">${el.Model}</p>
                                </div>
                                <div class="info-goods info-goods-centr">
                                <p class="model__key">Brand: </p>
                                <p class="model__value" style="color: #FF0000; margin-left: 5px;">${el.Brand}</p>
                                </div>
                                <div class="info-goods__availability">
                                <p class="availability" style="color:  #008847; margin-left: 5px">${el.instock}</p>
                                </div>
                                </div>
                                </div>
                                <div class="info-goods__price-bay">
                                <div class="goods-price">${el.price}</div>
                                <button class="btn_primery btn_primery-by" onclick = "productsPage.handleSetLocationStorage(this, '${el.id}','${el.counter}','${el.name}');">BUY</button>
                                </div>
                                <div class="info-goods__second">
                                <button class="btn_secondary btn-by-oneclick">Buy in 1 click</button>
                                </div>
                                </div>
                                <div class="goods-options-block">
                                <div class="goods-options goods-page-delivery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-dropbox deliv-truck" viewBox="0 0 16 16">
                                <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z"/>
                                </svg>
                                <div class="deliv">Delivery</div>
                                <p>not known <span>(to add)</span> </p>
                                </div>
                                <div class="goods-options goods-page-payment">
                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                </svg>
                                <div class="deliv">Payment</div>
                                <div class="option-payment">
                                <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                                </svg> cash</p>
                                <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                </svg> card</p>
                                </div>
                                </div>
                                </div>
                        </div>
                    </section>
                    `
                }
                })
                
                const html = `
                <section class="main-section__goods">  ${ htmlGoods} </section>
                `;
                ROOT_GOODS.innerHTML =  htmlGoods;
            }
            
            handleRenderproductsPage(){
                productsPage.render();
                ROOT_GOODS.innerHTML = "";
            }
        }
        
        const goodsPage = new Goods();
        // goodsPage.render()