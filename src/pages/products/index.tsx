import ShoppingCart from "@/components/Cart";
import useCartStore from "@/context";
import { getProducts } from "@/services/api/products";
import { CartItem, Product } from "@/types";
import { getTotalAmountCart } from "@/utils";
import { GetServerSideProps } from "next";

import { FC, useEffect, useState } from "react";

interface Props {
  products: Product[];
}

const Products: FC<Props> = ({ products }) => {
  const { getProductsOnCart, addItemToCart, removeItemFromCart } =
    useCartStore();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<string>("0");

  const getCart = () => {
    const contextCart = getProductsOnCart();
    setCart(contextCart);
    const total = getTotalAmountCart(contextCart);
    setTotalAmount(total);
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
  }, []);

  return (
    <>
      <ShoppingCart
        cart={cart}
        totalAmount={totalAmount}
        removeItem={removeItem}
      />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Shopping Cart
        </h1>

        <section>
          <h2>Products</h2>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <li
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={product.image}
                  style={{
                    width: "150px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  alt={product.title}
                />
                <h4 style={{ textAlign: "center" }}>{product.title}</h4>
                <p style={{ fontWeight: "bold" }}>Price: ${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    background: "green",
                    color: "white",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apiProducts = await getProducts();

  return {
    props: {
      products: apiProducts,
    },
  };
};

export default Products;
