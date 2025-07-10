import { products } from "../data/products.js";
import { Cart } from "../data/Cart.js";
import { removeToCart } from "../fontions/removeToCard.js";


const formatPriceToDollars = (priceCents) => {
    return (priceCents / 100).toFixed(2);
};
const renderOrderSummary = () => {
    let cartSummaryHTML = '';
    Cart.forEach((cartItem) => {
        const productId = cartItem.productId;
        const quantity = cartItem.quentity;
        // Trouve les détails du produit correspondant dans le tableau 'products'
        // Nous utilisons .find() pour trouver le premier produit dont l'ID correspond.
        let matchingProduct;
        products.forEach((product) => {
            if (product.id === productId) {
                matchingProduct = product;
            }
        });

        // Si le produit correspondant est trouvé, génère le HTML pour cet article du panier
        if (matchingProduct) {
            const priceDollars = formatPriceToDollars(matchingProduct.priceCents);

            cartSummaryHTML += `
                <div class="cart-item-container">
                    <div class="delivery-date">
                        Delivery date: Tuesday, June 21
                    </div>

                    <div class="cart-item-details-grid">
                        <img class="product-image" src="${matchingProduct.image}" alt="${matchingProduct.name}" />

                        <div class="cart-item-details">
                            <div class="product-name">
                                ${matchingProduct.name}
                            </div>
                            <div class="product-price">
                                $${priceDollars}
                            </div>
                            <div class="product-quantity">
                                <span>
                                    Quantity: <span class="quantity-label">${quantity}</span>
                                </span>
                                <span class="update-quantity-link link-primary">
                                    Update
                                </span>
                                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                                    Delete
                                </span>
                            </div>
                        </div>

                        <div class="delivery-options">
                            <div class="delivery-options-title">
                                Choose a delivery option:
                            </div>
                            <div class="delivery-option">
                                <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
                                <div>
                                    <div class="delivery-option-date">
                                        Tuesday, June 21
                                    </div>
                                    <div class="delivery-option-price">
                                        FREE Shipping
                                    </div>
                                </div>
                            </div>
                            <div class="delivery-option">
                                <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
                                <div>
                                    <div class="delivery-option-date">
                                        Wednesday, June 15
                                    </div>
                                    <div class="delivery-option-price">
                                        $4.99 - Shipping
                                    </div>
                                </div>
                            </div>
                            <div class="delivery-option">
                                <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
                                <div>
                                    <div class="delivery-option-date">
                                        Monday, June 13
                                    </div>
                                    <div class="delivery-option-price">
                                        $9.99 - Shipping
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    // Sélectionne l'élément HTML où le résumé du panier doit être affiché.
    // J'ai ajouté une classe 'js-order-summary' pour le cibler facilement.
    const orderSummaryElement = document.querySelector('.order-summary-js');
    if (orderSummaryElement) {
        orderSummaryElement.innerHTML = cartSummaryHTML;
    } else {
        console.error("L'élément avec la classe 'js-order-summary' n'a pas été trouvé. Veuillez ajouter <div class='order-summary js-order-summary'></div> à votre HTML.");
    }



    document.querySelectorAll('.js-delete-link').forEach(link => {
        link.addEventListener('click', () => {
            const productIdToDelete = link.dataset.productId;
            // Ici, vous implémenteriez la logique de suppression réelle du panier.
            // Pour l'instant, cela affiche juste un message dans la console.
            console.log(`Demande de suppression pour le produit avec ID: ${productIdToDelete}`);

            // Après avoir supprimé l'article du tableau 'Cart', vous devriez
            // re-rendre le résumé du panier pour mettre à jour l'affichage:
            // renderOrderSummary();
        });
    });
};





document.addEventListener('DOMContentLoaded', () => {
    renderOrderSummary();

    document.querySelectorAll('.js-delete-link').forEach(link => {
        link.addEventListener('click', () => {
            const productIdToDelete = link.dataset.productId;
            removeToCart(productIdToDelete)
            renderOrderSummary()
        });
    });
});
