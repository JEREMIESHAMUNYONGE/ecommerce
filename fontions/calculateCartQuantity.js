import { Cart } from "../data/Cart.js";
export const calculateCartQuantity = () => {
    let totalQuantity = 0;
    Cart.forEach((cartItem) => {
        totalQuantity += cartItem.quentity;
    });
    return totalQuantity;
};
