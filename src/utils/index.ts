import { CartItem } from "@/types";

export function getTotalAmountCart(cart: CartItem[]) {
  const totalAmount = cart.reduce((result, item) => {
    return result + item.quantity * item.price;
  }, 0);

  return totalAmount.toFixed(2);
}
