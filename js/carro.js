const offCanvas = document.querySelector('.offcanvas-body')
const cartInfo = document.querySelector('.cart_product')
const rowProduct = document.querySelector('.row_product')
const btnCarro = document.querySelector('.carro')
// Lista de los contenedores de los productos
const productsList = document.querySelector('.grid_productos')

// Variable de arreglos de productos
let allProductos = []

const valorTotal = document.querySelector('.total-pagar')


productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn_add_cart')) {
        const product = e.target.parentElement.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.card-title').textContent,
            price: product.querySelector('.precio').textContent,
        }

        const exist = allProductos.some(product => product.title === infoProduct.title)

        if(exist){
            const products = allProductos.map(product => {
                if(product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProductos = [...products];
        } else {
            allProductos = [...allProductos, infoProduct];
        }
        showHTML();
    }
})


// Funcion para monstrar html
const showHTML = () => {

    // Limpiar el html

    rowProduct.innerHTML = '';

    let total = 0;



    allProductos.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart_product')

        containerProduct.innerHTML = `
            <div class="info_cart_product">
                <span class="cantidad_producto_carrito">${product.quantity}</span>
                <p class="titulo_producto_carrito">${product.title}</p>
                <span class="precio_producto_carrito">${product.price}</span>
                <a href="#" class="btn_delete_product">
                    <img class="btn_delete_product" src="img/icon-close.png" alt="Eliminar producto" width="20px">
                </a>
            </div>
        `

        rowProduct.append(containerProduct)

        total = total + parseInt(product.price.slice(1)*product.quantity); 
    });

    valorTotal.innerText = `$${total}`;
};

rowProduct.addEventListener('click', e => {
    if(e.target.classList.contains('btn_delete_product')) {
        const productInfo = e.target.parentElement.parentElement;
        const title = productInfo.querySelector('.titulo_producto_carrito').textContent;

        allProductos = allProductos.filter(
            product => product.title !== title
        );


        showHTML();   
    }
})