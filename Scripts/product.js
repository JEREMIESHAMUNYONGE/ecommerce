
import { products } from "../data/products.js";
import { addToCart } from "../fontions/addToCart.js";

const productsGrid = document.querySelector('.products-grid-js')

let productsHtml = ''

products.forEach((product) => {
    const ratingValue = (product.rating.stars * 10).toFixed(0);
    const ratingImageSrc = `images/ratings/rating-${ratingValue}.png`;

    const priceDollars = (product.priceCents / 100).toFixed(2);

    productsHtml += `
                <div class="product-container">
                    <div class="product-image-container">
                        <img class="product-image" src="${product.image}" alt="${product.name}" />
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                        ${product.name}
                    </div>

                    <div class="product-rating-container">
                        <img class="product-rating-stars" src="${ratingImageSrc}" alt="Rating ${product.rating.stars} stars" />
                        <div class="product-rating-count link-primary">
                            ${product.rating.count}
                        </div>
                    </div>

                    <div class="product-price">
                        $${priceDollars}
                    </div>

                    <div class="product-quantity-container">
                        <select class= 'js-quantity-selector'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    <div class="product-spacer"></div>

                    <div class="added-to-cart">
                        <img src="images/icons/checkmark.png" alt="Added to cart checkmark" />
                        Added
                    </div>

                    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            `;
})
productsGrid.innerHTML = productsHtml;
document.querySelectorAll('.js-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Récupère l'ID du produit depuis l'attribut data-
        const productId = button.dataset.productId;
        // Récupère l'élément select de quantité associé à ce bouton
        // On trouve le conteneur parent du bouton, puis le sélecteur de quantité à l'intérieur.
        const productContainer = button.closest('.product-container');
        const quantitySelector = productContainer.querySelector('.js-quantity-selector');
        // Convertit la valeur sélectionnée en nombre
        const quantity = Number(quantitySelector.value);
        addToCart(productId, quantity)
        // Logique pour afficher le message "Added"
        const addedToCartElement = productContainer.querySelector('.added-to-cart');
        if (addedToCartElement) {
            addedToCartElement.style.opacity = '1'; // Rend le message visible
            // Cache le message après 2 secondes
            setTimeout(() => {
                addedToCartElement.style.opacity = '0';
            }, 2000);
        }
    });
});
