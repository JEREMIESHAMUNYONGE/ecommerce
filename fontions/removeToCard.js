import { Cart } from "../data/Cart.js";
import { saveCartToLocalStorage } from "./saveToStorage.js";
export const removeToCart = (productId) => {
    let newCart = []
    Cart.forEach((CartItem) => {
        if (CartItem.productId !== productId) {
            newCart.push(CartItem)
        }
        console.log(`Produit avec ID: ${productId} supprimé du panier.`);
        console.log("État actuel du panier (Cart) après suppression :", newCart);
    })
    return newCart;
    saveCartToLocalStorage()
};
