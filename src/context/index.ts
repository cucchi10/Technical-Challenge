import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import { CartItem, Product } from "@/types";

interface CartState {
  cart: Record<string, CartItem>;
  addItemToCart: (item: Product) => void;
  getProductsOnCart: () => CartItem[];
  removeItemFromCart: (itemId: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: {},
      addItemToCart: (item: Product) => {
        if (!item || !Object.keys(item).length) return;

        const cart = { ...get().cart };
        if (!cart[item.id]) {
          cart[item.id] = { ...item, quantity: 1 };
        } else {
          cart[item.id].quantity += 1;
        }
        set({ cart });
      },
      getProductsOnCart: () => {
        const cart = get().cart;
        return Object.values(cart);
      },
      removeItemFromCart: (itemId: number) => {
        const cart = { ...get().cart };
        const exist = cart[itemId];

        if (!exist) return;

        if (exist.quantity <= 1) {
          delete cart[itemId];
        } else {
          cart[itemId].quantity -= 1;
        }
        set({ cart });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
