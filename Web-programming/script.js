
const buttons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

let total = 0;

// Add click functionality to every "Add to cart" button
buttons.forEach(button => {
    button.addEventListener('click', () => {

        // Get the product container of the clicked button
        const product = button.parentElement;

        // Get the product name
        const name = product.querySelector('h3').textContent;

        // Get the product price and convert it to a number
        const price = parseFloat(product.querySelector('p').textContent);

        // Create a new list item for the cart
        const li = document.createElement('li');
        li.textContent = `${name} - ${price.toFixed(2)}€`;
        cartItems.appendChild(li);

        // Update the total price
        total += price;
        totalElement.textContent = total.toFixed(2) + '€';

    });
});
