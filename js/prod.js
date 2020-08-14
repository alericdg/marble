var product = [{
    "id" : 12345,
    "name" : "Oxford chair",
    "price" : 3200,
    "img" : "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202014/0153/book-nook-armchair-c.jpg",
}, {
    "id" : 12346,
    "name" : "Toledo chair",
    "price" : 3000,
    "img" : "https://target.scene7.com/is/image/Target/GUEST_f99dd8c9-7921-49fa-a814-3089615a7197?wid=488&hei=488&fmt=pjpeg",
}, {
    "id" : 12347,
    "name" : "Roma chair",
    "price" : 3000,
    "img" : "https://target.scene7.com/is/image/Target/GUEST_67dabe83-09cf-4898-9a1d-c791f62547b7?fmt=webp&wid=1400&qlt=80",
}, {
    "id" : 12348,
    "name" : "Paris chair",
    "price" : 2890,
    "img" : "https://www.gomodern.co.uk/var/images/product/1200.863/GM-PIL-02-1-large.jpg",
}];

var order = [];

function addOrder(index) {
    order.push(product[index]);
    renderOrder();
}

function renderOrder() {
    columnOrder.show('slow');
    orderContainer.empty();
    var total = 0;
    order.forEach(function(product, i) {
        orderContainer.append(`<a id="close" href="">&times;</a>`);
        orderContainer.append(`<li class="item-name">${product.name}</li>`);
        orderContainer.append(`<li class="item-price">$${product.price}</li>`);
        total = total + product.price;
    });
    $('.price').html(`$ ${total}`)
}

$(document).ready(() => {
function renderProduct() {
    product.forEach(function(product, index) {
        productsContainer.append(`<div class="product-item" data-id="${index}">
        <img class="card-image-small" src="${product.img}">
        <div class="product-text">${product.name} $${product.price}</div>
        <button class="btn-add">Add to cart</button>
        </div>`);
    })

    
    var listGroupItem = $('.btn-add');
    listGroupItem.click(function(event) {
        var indexSelection = $(event.target).data("id");
        console.log(event);
        addOrder(indexSelection);
    });
}

    productsContainer = $('#products-card');
    orderContainer = $('#order');
    columnOrder = $('.shopping-cart');

    $('#btnConfirm').click(function() {
        $('#column-products').removeClass('col-sm-4');
        $('#column-products').addClass('col-sm-2');

        pay = $('input[name="pay"]:checked');
        console.log(pay);
        
        comment = $('input[name="comment"]');
        
        $('#pay-display').html(`<h2>${pay.val()}</h2>`)
        $('#comment-display').html(`<p>${comment.val()}</p>`)
    })

    renderProduct();
})