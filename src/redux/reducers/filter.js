const initialState = {
  sortBy: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_FILTER":
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
