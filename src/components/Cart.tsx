import { CartItem } from "@/types";
import React, { FC, useState } from "react";

interface Props {
  cart: CartItem[];
  removeItem: (id: number) => void;
  totalAmount: string;
}

const ShoppingCart: FC<Props> = ({ cart, removeItem, totalAmount }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", position: "fixed" }}>
      <button
        onClick={() => setCartOpen(!isCartOpen)}
        style={{
          position: "fixed",
          top: "20px",
          right: "30px",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          fontSize: "30px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        🛒
      </button>

      <div
        style={{
          position: "fixed",
          width: isCartOpen ? "300px" : "0",
          right: 0,
          top: 0,
          transition: "width 0.3s ease",
          background: "lightgray",
          padding: isCartOpen ? "20px" : "0",
          overflow: "hidden",
          overflowY: "auto",
          overflowX: "hidden",
          height: "99vh",
        }}
      >
        <h2 style={{ marginTop: "20px" }}>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderBottom: "1px solid black",
                }}
              >
                <div>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p style={{ fontWeight: "bold", marginTop: "20px" }}>
          Total: ${totalAmount}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
