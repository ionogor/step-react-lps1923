import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

const ShoppingCart = ({ books }) => {
  const { cartItems } = useSelector((state) => state);

  // const sumCart = books.reduce((acc, curr) => {
  //   return acc + curr.price;
  // }, 0);

  return (
    <div className="shopping-cart">
      {cartItems.map((element) => {
        return <CartItem key={element} element={element} books={books} />;
      })}
      <div className="shopping-cart__checkout">
        <p>Total: $</p>
        <button className="shopping-cart_item-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
