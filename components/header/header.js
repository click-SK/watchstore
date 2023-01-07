class Header{
    handlerOpenShopingPage(){
      shopingPage.render();
      
    }

    render(count) {

      // 
        let htmlHeader = '';
        let htmlSearchCategories = '';
        let htmlNavbar = '';
        // 

        CATALOG.forEach((el) =>{
          let categ = el.categories;


          htmlNavbar += `
                <ul class="header__item-nav--categories">
                <li class="header__item-nav--categories-item">
                  <a href="" onclick="">${el.categories}</a>
                  <div class="header__item-nav--categories-block">
                    <div class="categories-block--item">
                      <ul class="header__item-nav--categories-mod"> 
                        <div class="mod-list"><p> Style </p> 
                        <li class="mod-item">Classic watch</li>
                        <li class="mod-item">Sports watch</li>
                        <li class="mod-item">Waterproof watch</li>
                        </div>
                      </ul>
                      <ul class="header__item-nav--categories-mod"> 
                        <div class="mod-list"><p> Case size </p> 
                          <li class="mod-item">Big watch</li>
                          <li class="mod-item">Medium watch</li>
                          <li class="mod-item">Small watch</li>
                        </div>
                      </ul>
                    </div>
                    <div class="categories-block--item"> 
                      <ul class="header__item-nav--categories-mod"> 
                        <div class="mod-list"><p> Country </p> 
                          <li class="mod-item">Japan</li>
                        </div>
                      </ul>
                      <ul class="header__item-nav--categories-mod"> 
                        <div class="mod-list"><p> Mechanism </p> 
                          <li class="mod-item">Mechanical watches</li>
                          <li class="mod-item">Quartz watch</li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
          `;

        })
            

            htmlHeader += `
            <header class="">
            <div class=" header-item header__top">
                <div class="header__logo"> LOGO</div>
                <div class="header__search">
                        <div class="header__search-form">
                            <input class="header__search-input" type = "text" placeholder="Search">
                            <div class="header__search-categories">
                              All Categorise 
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                              </svg>
                                <ul class="header__search-categories--list">
                                  <li class="header__search-categories--list-item">Men's Watch</li>
                                  <li class="header__search-categories--list-item">Ladies Watch</li>
                                  <li class="header__search-categories--list-item">Smart watch</li>
                                  <li class="header__search-categories--list-item">Sports watch</li>
                                </ul>
                              </div>
                        </div>
                        <button class="header__search-btn btn_primery btm-prime-blue" >GO</button>
                </div>
                <div class="header__acc-button">
                    <button class="header__btn_primery btn_primery">Log In</button>
                    <button class="header__btn_secondary btn_secondary">Sing In</button>
                </div>
            </div>
            <div class="header-item header__bot">
            <div class="header__item header__item--nav"> <a href="#"> Katalog   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
          </svg></a> 
              ${htmlNavbar}
        </div>
                <div class="header__item header__item--page"> <a href="#">Blog</a></div>
                <div class="header__item header__item--page"><a href="#">About Us</a></div>
                <div class="header__item header__item--page"><a href="#">Payment and delivery</a></div>
                <div class="header__item header__item--page"><a href="#">Exchange and return</a></div>
                <div class="header__item header__item--page"><a href="#">Contacts</a></div>
                <div id='basket' class="header__item header__item--basket" onclick="headerPage.handlerOpenShopingPage();"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                  </svg> <a href="#">my basket</a>
                    <div id='count' class="counter"> ${count} </div> 
                  </div>
            </div>
        </header>
             `

        // const html = `
        //     <section class="main-section"> 
        //         <title class="main-section__title">popular goods</title>
        //         <div class="main-section__goods">
        //         ${htmlCatalog}
        //         </div>
        //     </section>
        // `
        ;

        ROOT_HEADER.innerHTML = htmlHeader;
    }
    
}



const headerPage = new Header();

// const productsCounter = localStorageUtil.getProducts();
// headerPage.render(productsCounter.length);

