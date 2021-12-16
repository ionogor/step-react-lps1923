import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Item = ({ books }) => {
  console.log("books", books);

  const dispatch = useDispatch(); //acces la actions

  const id = useParams();

  const dispatchAddItem = () => {
    dispatch(addToCart(item.isbn13));
  };

  const item = books.find((el) => {
    return el.isbn13 === id.id;
  });

  console.log("item", item);

  return (
    <>
      {item ? (
        <div>
          <div className="product">
            <img src={item.image} alt="img" />
          </div>

          <table>
            <thead>
              <tr>
                <td>Price</td>
                <td>{item.price}</td>
              </tr>
            </thead>
          </table>

          <button onClick={dispatchAddItem} className="product-button">
            Buy
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Item;
