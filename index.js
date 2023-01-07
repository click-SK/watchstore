function render(){

    const productsCounter = localStorageUtil.getProducts();
    headerPage.render(productsCounter.length);

    productsPage.render();
    
}


let CATALOG = [];



fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });



 // -- goods content wraper on goodsPage --\\

document.body.onclick = function(event){
    event = event || window.event;
    // console.log(event.target.classList.contains('item-img__second'));
    if (event.target.classList.contains('item-img__second')){
        console.log('yes');
        let src = event.target.src;
        console.log(src);
        document.getElementById('.item-img__main').src = event.target.src;
    }
} 
   
 