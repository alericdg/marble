$( document ).ready(() => {
    $('form[name="user"]').validate({
        rules: {
            username: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        }
    })
  })
  
  $(document).ready(() => {

            $("form[name='step1']").validate({
                rules: {
                    search: {
                        required: true,
                        minlength: 3
                    }
                },
                messages: {
                    search: {
                        required: 'The search field is mandatory',
                        minlength: 'The field must have a minimum of 3 characters'
                    }
                },
                submitHandler: function (form) {
                    searchProducts($('input[name="search"]').val());
                }
            });

            $("#search-button").click(function (form) {
                searchProducts($('input:text[name="search"]').val());
            
            });

        })

        function getCardHtml(product) {
            return `
            <div id="productos" class="grid-container">
            <div class="card-search">
                <a href="#" onClick="getProduct('${product.id}')">
                    <img class="card-image-search"src="${product.thumbnail}" width="100%">
                </a>
                <div class="search-card-body">
                    <p class="search-card-text">${product.title}</p>
                    <p class="search-item-price">$${product.price}</p>
                    <button class="btn-add">Add to cart</button>
                </div>
            </div>
        </div>          
            `;
        }

        function renderProducts(products) {
            $('.search-results').empty();
            products.forEach(product =>{
                var htmlTemplate = getCardHtml(product);
                $('.search-results').append(htmlTemplate);
            });
        }

        function searchProducts(key) {
            var url = `https://api.mercadolibre.com/sites/MLA/search?q=${key}&limit=10`;
            $.ajax({
                method: "GET",
                url : url 
            }).done(function(data) {
                dataDeLaBusqueda = data.results;
                renderProducts(dataDeLaBusqueda);
                $('.search-results').show();
            }).fail(function(error) {
                console.log(error);
            })
        }


        function getProduct(id) {
            var url = `https://api.mercadolibre.com/items/${id}/description`;
            $.ajax({
                method: "GET",
                url: url,
            }).done(function (data) {
                $('.modal').append(data.plain_text);
                $('.modal-container').show();

                    
                })
                console.log(id);
            }).fail(function (error) {
                console.log(error);
            });

/* $( document ).ready(() => {
    $('form[name="user"]').validate({
        rules: {
            username: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        }
    })
  })

  $( document ).ready(function() {

    $("form[name='step1']").validate({
        rules: {
            search: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            search: {
                required: 'The search field is mandatory',
                minlength: 'The field must have a minimum of 3 characters'
            }
        },
        submitHandler: function (form) {
            searchProducts($('input[name="search"]').val())
        }
    });


    $("#search-button").click(function (form) {
        searchProducts($('input:text[name="search"]').val());
    
    });

    function getCardHtml(product) {
        return `
        <div id="productos" class="grid-container">
            <div class="card-search">
                <a href="#" onClick="getProduct('${product.id}')">
                    <img class="card-image-search"src="${product.thumbnail}" width="100%">
                </a>
                <div class="search-card-body">
                    <p class="search-card-text">${product.title}</p>
                    <p class="search-item-price">${product.price}</p>
                    <button class="btn-add">Add to cart</button>
                </div>
            </div>
        </div>
        `;
    }

    function renderProducts(products) {
        $('.search-results').empty();
        products.forEach(product =>{
            var htmlTemplate = getCardHtml(product);
            $('.search-results').append(htmlTemplate);
        });
    }

    function searchProducts(key) {
        var url = `https://api.mercadolibre.com/sites/MLA/search?q=${key}&limit=10`;
        $.ajax({
            method: "GET",
            url : url 
        }).done(function(data) {
            renderProducts(data.results);
            $('.search-results').show();
        }).fail(function(error) {
            console.log(error);
        })
    }
    
    function getProduct(id) {
        var url = `https://api.mercadolibre.com/items/${id}/description`;
        $.ajax({
            method: "GET",
            url : url 
        }).done(function(data) {
            $('.modal').append(data.plain_text);
            $('.modal-container').show();
            $(".close").click(function(){
                $(".modal").hide();
            })
        }).fail(function(error) {
            console.log(error);
        })
    };
}); */