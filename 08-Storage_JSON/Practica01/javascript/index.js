import { productos, cart } from './db.js'

document.getElementById("back").addEventListener("click", () => {
  history.back();
});

//Cards de productos en el DOM

const divCards = document.getElementById("cards");

// Cards de productos sin innerHTML */

productos.forEach(el => {
    const div = document.createElement("div");
    div.classList.add("div-card");

    const img = document.createElement("img");
    img.src = el.img;
    img.alt = el.title;
    img.classList.add("div_img-product");

    const title = document.createElement("h3");
    title.textContent = el.title;
    title.classList.add("div_title");

    const desc = document.createElement("p");
    desc.textContent = el.description;
    desc.classList.add("div_description");

    const price = document.createElement("p");
    price.textContent = el.price;
    price.classList.add("div_price");

    const addProduct = document.createElement("button")
    addProduct.textContent = "Add to cart"
    addProduct.classList.add("button-addProduct")
    addProduct.id = `addProduct`
    addProduct.addEventListener("click", () => {
        addToCart(el._id, el.title, el.price)
        renderCart()
    })

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(price)
    div.appendChild(addProduct)

    divCards.appendChild(div)
})

//funcionalidad del carrito y productos
//tengo que traer los datos del localStorage y copiarlos al cart si es que hay


function addToCart(_id, title, price, qty = 1) {

    const productToAdd = { _id, title, price: parseFloat(price.slice(1)), qty }         //producto para agegar o sumar cantidad al cart
    const productExist = cart.find((el) => el._id === _id) || false                     //chequear que el producto exista o no

    productExist ? cart.find((el) => el._id === _id).qty++ : cart.push(productToAdd)    //Suma la qty del producto al cart o lo agrega por 1ra vez

    cartToLocStor(cart)
}

function deleteFromCart(id) {

    const productIndex = cart.findIndex((el) => el._id === id)
    cart.splice(productIndex, 1)

    cartToLocStor(cart)
    renderCart()
}

function cartToLocStor(cart) {
    let jsonCart = JSON.stringify(cart)
    localStorage.setItem("productos", jsonCart)
}


function totalCart(cart) {

    let total = []
    cart.forEach((el) => {
        total.push(el.qty * el.price)
    })                                                                                  //push del total del producto al total                       

    total = total.reduce((prev, curr) => prev + curr, 0).toFixed(2)
    return total       //reduce para sumar los valores del array de total y reasignarlo
}

// Secction Carrito

const divCart_id = document.getElementById("cart")
const tableCart = document.createElement("table")
divCart_id.appendChild(tableCart)

tableCart.innerHTML = `
    <thead>
        <tr>
            <th>Product</th>
            <th>Unit</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
            <th>TOTAL</th>
        </tr>
    </thead>
`
const tableBody = document.createElement("tbody")
tableCart.appendChild(tableBody)

renderCart() // renderiza el carrito al cargar la pagina

function renderCart() {
    tableBody.innerHTML = ''
    cart.forEach(el => {
        const cartRow = document.createElement("tr")
        cartRow.classList.add("cartRows")

        cartRow.innerHTML = `
            <th>${el.title}</th>
            <th>$ ${el.price}</th>
            <th>${el.qty}</th>
            <th>$ ${Math.round((el.price * el.qty)*100)/100}</th>
            <th><button id=${el._id}>delete product</button></th>
        `
        tableBody.appendChild(cartRow)
        
        let buttonDelete = document.getElementById(el._id)
        buttonDelete.addEventListener("click", () => {
            deleteFromCart(el._id)
        })
    });

    if (cart.length) {
        const totalTh = document.createElement("th")
        const firstRow = document.getElementsByClassName("cartRows")[0]
        firstRow.appendChild(totalTh)

        const lastTotalTh = firstRow.lastChild
        lastTotalTh.rowSpan = cart.length
        lastTotalTh.textContent = `$ ${totalCart(cart)}`
    }


}
