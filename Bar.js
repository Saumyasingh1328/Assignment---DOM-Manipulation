// script.js

const productData = [];

document.getElementById('addProduct').addEventListener('click', () => {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const rating = parseFloat(document.getElementById('productRating').value);

    if (name && price >= 0 && rating >= 0 && rating <= 5) {
        productData.push({ name, price, rating });
        updateGraphs();
    }
});

document.getElementById('sortByPrice').addEventListener('click', () => {
    productData.sort((a, b) => a.price - b.price);
    updateGraphs();
});

document.getElementById('sortByRating').addEventListener('click', () => {
    productData.sort((a, b) => a.rating - b.rating);
    updateGraphs();
});

function updateGraphs() {
    const priceBarsContainer = document.getElementById('priceBars');
    const ratingBarsContainer = document.getElementById('ratingBars');

    priceBarsContainer.innerHTML = '';
    ratingBarsContainer.innerHTML = '';

    productData.forEach(product => {
        // Create price bar
        const priceBar = document.createElement('div');
        priceBar.className = 'bar price-bar';
        priceBar.style.width = `${product.price * 10}px`;
        priceBar.textContent = `${product.name}: $${product.price}`;
        priceBarsContainer.appendChild(priceBar);

        // Create rating bar
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar rating-bar';
        ratingBar.style.width = `${product.rating * 20}px`;
        ratingBar.textContent = `${product.name}: ${product.rating} stars`;
        ratingBarsContainer.appendChild(ratingBar);
    });
}
