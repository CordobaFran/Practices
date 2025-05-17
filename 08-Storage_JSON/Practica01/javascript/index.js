// import { faker } from '@faker-js/faker';
const { faker } = await import('https://esm.sh/@faker-js/faker');

//Creacion de productos

const productos = []
let cart = []

//actualizamos cart con localstorage
let locStorCart = JSON.parse(localStorage.getItem("productos"))
locStorCart ? cart = locStorCart : cart

class Product {
    constructor() {
        this._id = faker.commerce.isbn(10),
            this.img = faker.image.urlPicsumPhotos({ width: 128, height: 128, category: 'nature', }),
            this.title = faker.commerce.productName(),
            this.description = faker.commerce.productDescription(),
            this.price = faker.commerce.price({ min: 100, max: 2000, dec: 2, symbol: '$' }),
            this.qty = Math.round(Math.random() * 40)
    }
}

function createProducts(qty = 10) {
    for (let i = 0; i < qty; i++) {
        productos.push(new Product())
    }
}

createProducts(15)

//Cards de productos en el DOM

const divCards = document.getElementById("cards");

// Forma utilizando inner HTML
/* productos.forEach(el => {
    let div = document.createElement("div")
    div.innerHTML = `
        <img src=${el.img}
        <h3>${el.title}</h3>
        <p>${el.description}</p>
        <p>${el.price}</p>
        `
    divCards.appendChild(div)
    console.log(el);
}); */

// Cards de productos sin innerHTML

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
        refreshCart()
        return addToCart(el._id, el.title, el.price)
    })

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(desc)
    div.appendChild(price)
    div.appendChild(addProduct)

    divCards.appendChild(div)
})

// Carrito
const divCart = document.getElementById("cart")
const cartTable = document.createElement("table")
const cartRow = document.createElement("tr")
const cartTitle = document.createElement("th")
cartTitle.textContent = "Producto"

const cartPrice = document.createElement("th")
cartPrice.textContent = "Precio"

cartRow.appendChild(cartTitle);
cartRow.appendChild(cartPrice)

cartTable.appendChild(cartRow)

divCart.appendChild(cartTable)

function refreshCart() {
    cart.forEach(el => {

        const cartRow = document.createElement("tr")

        const cartTitle = document.createElement("td")
        cartTitle.textContent = el.title

        const cartPrice = document.createElement("td")
        cartPrice.textContent = el.price * el.qty

        cartRow.appendChild(cartTitle)
        cartRow.appendChild(cartPrice)

        cartTable.appendChild(cartRow)
    });
}


// funcionalidad del carrito y productos
//tengo que traer los datos del localStorage y copiarlos al cart si es que hay




function addToCart(_id, title, price, qty = 1) {

    const productToAdd = { _id, title, price: parseFloat(price.slice(1)), qty }         //producto para agegar o sumar cantidad al cart
    const productExist = cart.find((el) => el._id === _id) || false                     //chequear que el producto exista o no
    let total = []

    productExist ? cart.find((el) => el._id === _id).qty++ : cart.push(productToAdd)    //Suma la qty del producto al cart o lo agrega por 1ra vez

    let jsonCart = JSON.stringify(cart)
    localStorage.setItem("productos", jsonCart)                                     //pasamos el json convertido al localStorage


    cart.forEach((el) => {
        total.push(el.qty * el.price)
    })                                                                                  //push del total del producto al total                       

    total = total.reduce((prev, curr) => prev + curr, 0).toFixed(2)       //reduce para sumar los valores del array de total y reasignarlo
}


