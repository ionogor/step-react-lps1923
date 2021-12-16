import { REMOVE_TO_CART } from "../actions/cartActions";
import { ADD_TO_CART } from "../actions/cartActions";
const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("cartItems", state.cartItems);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item !== action.payload;
        }),
      };

    default:
      return state;
  }
};
export default CartReducer;
