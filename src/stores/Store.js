import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import fetchDataHomeReducer from "./reducers/fetchDataHomeReducer";
import fetchUserReducer from "./reducers/fetchUserReducer";
import deleteUserReducer from "./reducers/deleteUserReducer";
import fetchProductAdReducer from "./reducers/fetchProductAdReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  fetchDataHome: fetchDataHomeReducer,
  fetchUser: fetchUserReducer,
  deleteUser: deleteUserReducer,
  fetchProduct: fetchProductAdReducer,
  cart: cartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
