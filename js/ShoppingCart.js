function ShoppingCart() {
    
    this.cart = [];

    this.populate = function() {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    this.add = function(item) {
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('cart-container');
    }

    this.get = function() {
        return this.cart;
    }

    this.buildList = function() {
        var html = '';
        this.cart.forEach(product => {
            html = html + `<li>${ product.title }</li>`;
        });
        return html;
    }

    this.buildCart = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
            <h2>Carrito de compras (${this.cart.length})</h2>
            <ul>
                ${ this.buildList() }
            </ul>
            <input type="button" class="btn -secondary" value="Cancelar">
            <input type="button" class="btn -primary" value="Comprar">        
        `

        container.innerHTML = html;
    }

    
}