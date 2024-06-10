import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actions/cart";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x) =>
          x.id === item.id && x.size === item.size && x.color === item.color
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id &&
            x.size === existItem.size &&
            x.color === existItem.color
              ? { ...x, qty: x.qty + item.qty }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, qty: item.qty }],
        };
      }

    case UPDATE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.id === action.payload.id &&
          x.size === action.payload.size &&
          x.color === action.payload.color
            ? { ...x, qty: action.payload.qty }
            : x
        ),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) =>
            !(
              x.id === action.payload.productId &&
              x.size === action.payload.size &&
              x.color === action.payload.color
            )
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
