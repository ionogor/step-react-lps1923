import React from "react";
import { useSelector } from "react-redux";
const CartItem = ({ books, element }) => {
  const fountItem = books.find((item) => {
    return item.isbn13 === element;
  });

  return (
    <div className="shopping-cart_item ">
      <img src={fountItem.image} className="shopping-cart_item-img" alt="img" />
      <div>
        <h3 className="shopping-cart__title">{fountItem.title}</h3>
        <p>{fountItem.price}</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
