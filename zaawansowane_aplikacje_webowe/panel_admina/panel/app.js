"use strict";

const products = [];

const addProductButton = document.getElementById('add-product-button');
const nameInput = document.getElementById('name-input');
const categoryInput = document.getElementById('category-input');
const priceInput = document.getElementById('price-input');

const productsContainer = document.getElementById('products-container');
const productCount = document.getElementById('product-count');


let id = 0;

addProductButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newProduct = {id: id, name: nameInput.value, category: categoryInput.value, price: priceInput.value};
    products.push(newProduct);

    id++;

    updateProductCount();
    renderProducts();
});

function updateProductCount() {
    productCount.value = products.length;
}

function renderProducts() {
    products.forEach((element) => {
        const productContainer = document.createElement('div');
        productContainer.classList = '';

        productsContainer.appendChild(productContainer);
    });
}
