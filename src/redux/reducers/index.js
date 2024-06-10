import { combineReducers } from "redux";
import sneakersReducer from "./sneakers.js";
import cartReducer from "./cart.js";
import filterReducer from "./filter.js";
import profileReducer from "./profileReducer.js";

const rootReducer = combineReducers({
  sneakers: sneakersReducer,
  cart: cartReducer,
  filters: filterReducer,
  profile: profileReducer,
});

export default rootReducer;
