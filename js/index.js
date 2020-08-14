var searchBoxInput;
var searchKey;
var searchResultLength;
var searchButton;
var formSearch;
var searchResume;
var products;


function getSearchBoxValue(event) {
    var searchBoxInputValue = searchBoxInput.value;
    var searchResult = products.search(searchBoxInputValue);
    debugger;

    if (searchBoxInputValue.trim() !== '') {
        setSearchKeyRender(searchBoxInputValue, searchResult.length);
        products.buildList('products-container', 'results');
    }
}

function setSearchKeyRender(key, resultLength) {
    searchResultLength.innerHTML = resultLength;
    searchKey.innerHTML = key;
    searchResume.style.display = "block";
}

function addToCart(id) {
    var product = products.getById(id)[0];
    shoppingCart.add(product);
}

$(document).ready(function() {
   console.log( "Ready!" );

    products = new Products();
    products.init(this.data);
    products.buildList('productos', 'data');

    shoppingCart = new ShoppingCart();
    shoppingCart.populate();
    shoppingCart.buildCart('shopping-cart-items');

    searchKey = $("#search-key");
    searchResultLength = $("#search-result-length");

    searchButton = $("#search-button");
    searchButton.attr("disabled", true);
    searchButton.click(function(event){
		getSearchBoxValue(event);
	});

    searchBoxInput = document.getElementById("search-bar");
    searchBoxInput.addEventListener("input", function (event) {
        searchButton.attr("disabled", (event.target.value.length <= 3));
    });

    formSearch = document.getElementById("form-search");
    formSearch.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!searchButton.disabled) {
            getSearchBoxValue();
        }
    });

    searchResume = document.getElementById("search-resume")
    searchResume.style.display = "none";

});