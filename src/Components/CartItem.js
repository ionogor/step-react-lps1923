import React from "react";
import { useSelector } from "react-redux";
import { deleteToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";

const CartItem = ({ books, element }) => {
  const { cartItems } = useSelector((state) => state);

  const dispatch = useDispatch(); //acces la actions
  const fountItem = books.find((item) => {
    return item.isbn13 === element;
  });

  const dispatchDeleteItem = () => {
    dispatch(deleteToCart(element));

    console.log("CartItems", cartItems);
  };

  return (
    <div className="shopping-cart_item ">
      <img src={fountItem.image} className="shopping-cart_item-img" alt="img" />
      <div>
        <h3 className="shopping-cart__title">{fountItem.title}</h3>
        <p>{fountItem.price}</p>
        <button onClick={dispatchDeleteItem}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
