import { combineReducers } from "redux";
import { productsReducer } from "./productsReducers";

const reducers = combineReducers({
    allProducts: productsReducer,
});

export default reducers;