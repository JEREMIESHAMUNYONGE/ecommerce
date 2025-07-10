import { calculateCartQuantity } from "./calculateCartQuantity.js";
export const updateCartQuantityDisplay = () => {
    const totalCartQuantity = calculateCartQuantity();
    const cartQuantityElement = document.querySelector('.cart-quantity-js');
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = totalCartQuantity;
    }
};
