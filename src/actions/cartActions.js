export const ADD_TO_CART = "add_to_cart";
export const REMOVE_TO_CART = "remove_to_cart";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const deleteToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id,
  };
};
