'use strict '

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent =document.querySelectorAll('.tabs__content-item ');

tabItem.forEach(function(element){
    element.addEventListener('click',open);
});

function open(evt){
    const tabtarget =evt.currenttarget;
    const button = tabtarget.dataset.button;

    tabItem.forEach(function(item){
item.classList.remove('tabs__content-item--active');
    }  )

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    })

    tabtarget.classList.add('tabs__content-item--active');
    document.querySelectorAll(`#${button}`).classList.add('tabs__content-item--active')
}