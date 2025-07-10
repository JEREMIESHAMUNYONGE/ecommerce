import { Cart } from "../data/Cart.js";
import { updateCartQuantityDisplay } from "./updateCartQuantityDisplay.js";
export const addToCart = (productId, quantity) => {
    let matchingItem;
    Cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quentity += quantity;
    } else {

        Cart.push({
            productId: productId,
            quentity: quantity
        });
    }
    updateCartQuantityDisplay()
};