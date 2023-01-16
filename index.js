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

// range slide

const rangeSlider = document.getElementById('range-slider');
    if(rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [1, 199],
            connect: true,
            step: 1,
            range: {
                'min': 1,
                'max': 199
            }
        });  

        const input0 = document.getElementById('input-range-0'); 
        const input1 = document.getElementById('input-range-1'); 
        const inputs = [input0, input1]
    
        rangeSlider.noUiSlider.on('update', function(values, handle){
            inputs[handle].value = Math.round(values[handle])
        })

        const setRangeSlider = (i, value) =>{
            let arr = [null, null];
            arr[i] = value;

            rangeSlider.noUiSlider.set(arr)
        };

        inputs.forEach((el,index) =>{
            el.addEventListener('change', (e) =>{
                setRangeSlider(index, e.currentTarget.value);
            })
        })
        
    }