import React from "react";

import { Link } from "react-router-dom";

const Items = ({ books }) => {
  console.log(books);
  return (
    <div className="items-list-wrapper">
      {books.map((book) => {
        return (
          <div key={book.isbn13} className="item-card">
            <Link to={`/item/${book.isbn13}`}>
              <img className=" items-list-image" src={book.image} alt=""></img>
            </Link>

            <p>{book.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
