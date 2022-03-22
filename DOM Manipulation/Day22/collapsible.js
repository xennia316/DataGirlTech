
let item = document.getElementsByClassName('item')
let isOpen =  true;

function collapse(){
    item[0].style.height = 0;

    if(isOpen == true){
        item[0].style.height = 'height: 0';
    }
    if(isOpen == false){
        item[0].style.height = 'height: 150px'
    }
}