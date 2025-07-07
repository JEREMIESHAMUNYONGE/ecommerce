
import { products } from "../data/products.js";
import { Cart } from "../data/Cart.js";

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
                        <select>
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


const addToCart = (productId, quantity) => {
    let matchingItem;
    Cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quentity += 1;
    } else {
        Cart.push({
            productId: productId,
            quentity: 1
        });
    }
    calculateCartQuantity()
};
const calculateCartQuantity = () => {
    let totalQuantity = 0;
    Cart.forEach((cartItem) => {
        totalQuantity += cartItem.quentity;
    });
    return totalQuantity;
};



document.querySelectorAll('.js-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId; // Récupère l'ID du produit depuis l'attribut data-
        addToCart(productId)
        // Logique pour afficher le message "Added"
        const addedToCartElement = button.closest('.product-container').querySelector('.added-to-cart');
        if (addedToCartElement) {
            addedToCartElement.style.opacity = '1'; // Rend le message visible
            // Cache le message après 2 secondes
            setTimeout(() => {
                addedToCartElement.style.opacity = '0';
            }, 2000);
        }
    });
});

console.log(document.querySelector('cart-quantyti-js'));
