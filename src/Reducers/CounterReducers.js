export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";

const initialState = {
  counter: 0,
  text: "aaa",
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
