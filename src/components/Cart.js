import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="cartIcon">
      <button onClick={clickHandler}>
        <h3>Cart: {quantity} Items</h3>
      </button>
    </div>
  );
};

export default Cart;
