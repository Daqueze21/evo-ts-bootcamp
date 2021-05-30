import {AnyAction} from "redux";

import { ThunkAction } from 'redux-thunk'

import {State, BasketActionsTypes, BasketState } from "../../../types";
import {addPizzaToBasket, removePizzaFromBasket} from './basket-actionCreators';

const defaultState:BasketState = [];

export const basketReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case BasketActionsTypes.ADDED: {
      const pizza = action.payload;
      const index = state.findIndex(({ _id }) => _id === pizza._id);

      if (index === -1) {
        return [...state, { ...pizza, count: 1 }]
      };

      const pizzaWithUpdatedCount = { ...state[index], count: state[index].count + 1 };
      return [...state.slice(0, index), pizzaWithUpdatedCount, ...state.slice(index + 1)]
    }

    case BasketActionsTypes.REMOVED: {
      const pizzaId = action.payload;
      const index = state.findIndex(({ _id }) => _id === pizzaId);
      
      if (index === -1) {
        return state
      };

      const pizzaWithUpdatedCount =
        state[index].count > 1 ? [{ ...state[index], count: state[index].count - 1 }] : [];
        
      return [...state.slice(0, index), ...pizzaWithUpdatedCount, ...state.slice(index + 1)]
    }

    default:
      return state
  }
};

type BasketActionsType = ReturnType<typeof addPizzaToBasket> | ReturnType<typeof removePizzaFromBasket>;

export const addPizza = (id: string): ThunkAction<void, State, {}, BasketActionsType > => (
  dispatch,
  getState,
) => {
  const pizza = getState().pizza.find(({ _id }) => _id === id);
  if (!pizza) return

  dispatch(addPizzaToBasket(pizza));
}



