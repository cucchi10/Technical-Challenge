import { getCart, setCart } from "@/services/localStorage";
import { CartItem, Product } from "@/types";

let cart: Record<string, CartItem> = {};

export function addItemToCart(item: Product) {
  if (!item || !Object.keys(item).length) return;

  if (!Object.keys(cart).length) {
    cart = getCart();
  }

  const exist = cart[item.id];
  if (!exist) {
    cart[item.id] = {
      ...item,
      quantity: 1,
    };
    return;
  }
  cart[item.id].quantity += 1;
  setCart(cart);
}

export function getProductsOnCart() {
  if (!Object.keys(cart).length) {
    cart = getCart();
  }
  return Object.values(cart).map((product) => product);
}

export function removeItemFromCart(itemId: number) {
  const exist = cart[itemId];

  if (exist.quantity <= 1) {
    delete cart[itemId];
  } else {
    cart[itemId].quantity -= 1;
  }

  setCart(cart);
}
