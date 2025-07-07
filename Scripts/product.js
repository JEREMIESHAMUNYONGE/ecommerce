
import { products } from "../data/products.js";

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
