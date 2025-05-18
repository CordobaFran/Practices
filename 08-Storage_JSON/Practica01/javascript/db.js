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

export { productos, cart }