function Products() {

    this.data = [];
    this.results = [];

    this.init = function(data) {
        this.data = data;
    }

    this.getById = function(id) {
        return this.data.filter((product)=> product.id === id)
    }

    this.buildHtmlProduct = function(product) {
        return `
            <div class="col-4-12">
                <article class="search-item">
                    <div class="col-4-12">
                        <img src="${product.img}" width="100">
                    </div>
                    <div class="col-8-12">
                        <h2>${product.title}</h2>
                        <p>$${product.price}</p>
                        <div>
                            <input type="button" class="btn -primary" value="Ver detalle">
                            <input type="button" class="btn -secondary"  value="Agregar al carrito" onclick="addToCart('${product.id}')">
                        </div>
                    </div>
                </article>
            </div>
        `
    }

    this.buildList = function(containerId, sourceData) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = '';

        this[sourceData].forEach(product => {
            html = html + this.buildHtmlProduct(product); 
        });
        
        container.innerHTML = html;
    }

    this.search = function(key) {
        this.results = [];
        this.data.forEach((product) => {
            if(product.title.toLowerCase().includes(key.toLowerCase())){
                this.results.push(product);
            }
        });
        return this.results;
    }

}