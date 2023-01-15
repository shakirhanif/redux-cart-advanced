import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((x) => (
          <li key={x.id}>
            <CartItem
              quantity={x.quantity}
              id={x.id}
              price={x.price}
              total={x.totalPrice}
              name={x.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
