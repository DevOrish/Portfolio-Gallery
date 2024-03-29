'use strict';


$(document).ready(function () {
    renderPortfolioItems()
})

function renderPortfolioItems() {
    var items = getItems()
    var currImg = 1
    var $elItemContainer = $('.items-container')
    var strHTMLs = items.map(function (item) {
        return `<div class="col-md-4 col-sm-6 portfolio-item" onClick="renderModalsInfo(${item.id})"><a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
         <div class="portfolio-hover">
           <div class="portfolio-hover-content">
             <i class="fa fa-plus fa-3x"></i>
           </div>
         </div>
         <img class="img-fluid" src=${item.imgUrl} alt="">
       </a>
       <div class="portfolio-caption">
         <h4>${item.name}</h4>
         <p class="text-muted">${item.subtitle}</p>
       </div>
        </div>`
    })
    $elItemContainer.html(strHTMLs.join(''))
}

function renderModalsInfo(itemId) {
    var items = getItems()
    var item = items.find(function(item){
        return item.id === itemId
    })
    $('.item-name').text(item.name)  
    $('.item-intro').text(item.intro)  
    $('.item-img').attr('src',item.imgUrl)  
    $('.item-desc').text(item.desc)  
    $('.item-date').text(item.date)  
    $('.item-category').text(item.category)  
    $('.item-link').attr('href',item.link)  
}




















function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}