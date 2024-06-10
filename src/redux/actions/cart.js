export const ADD_TO_CART = "ADD_T_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const updateCartItem = (product) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: product,
  };
};

export const removeFromCart = (productId, size, color) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { productId, size, color },
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
