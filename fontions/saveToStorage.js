import { Cart } from "../data/Cart.js";

export const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(Cart));
};