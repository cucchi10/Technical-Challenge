import {
  addItemToCart,
  getProductsOnCart,
  removeItemFromCart,
} from "@/context";
import { getProducts } from "@/services/api/products";
import { CartItem, Product } from "@/types";

import { FC, useEffect, useState } from "react";

const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const getCart = () => {
    const contextCart = getProductsOnCart();
    setCart(contextCart);
  };

  const fetchProducts = async () => {
    const apiProducts = await getProducts();

    setProducts(apiProducts);
  };

  const addToCart = (product: Product) => {
    addItemToCart(product);
    getCart();
  };

  const removeItem = (producId: number) => {
    removeItemFromCart(producId);
    getCart();
  };

  useEffect(() => {
    getCart();
    fetchProducts();
  }, []);

  return (
    <>
      <h1>CART</h1>
      {cart.map((item) => (
        <li key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <h1>TOTAL: {item.quantity}</h1>
          <button onClick={() => removeItem(item.id)}>Remove from Cart</button>
        </li>
      ))}

      <h2>Products</h2>
      {products.map((product) => (
        <li key={product.id}>
          <picture>
            <img
              src={product.image}
              style={{ width: "100px", height: "50px" }}
              alt="Picture of the author"
            />
          </picture>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>$ {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </>
  );
};

export default Products;
