import { combineReducers } from "redux";
import {pizzaListReducer} from "./pizzaList/pizzaList-reducer";
import {basketReducer} from "./basket/basket-reducer";

export default combineReducers({
  pizza: pizzaListReducer,
  basket: basketReducer,
});



