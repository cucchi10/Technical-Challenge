const keyCard = "cart";

export function setCart(cart: any) {
  localStorage.setItem(keyCard, JSON.stringify(cart));
}

export function getCart() {
  const cart = localStorage.getItem(keyCard);
  if (!cart) return {};
  return JSON.parse(cart);
}
