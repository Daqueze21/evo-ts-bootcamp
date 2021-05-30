import {Pizza, BasketActionsTypes, PayloadAction } from "../../../types";

export const addPizzaToBasket = (pizza: Pizza):   PayloadAction<BasketActionsTypes.ADDED, Pizza> => ({
  type: BasketActionsTypes.ADDED,
  payload: pizza,
});

export const removePizzaFromBasket = (id: string): PayloadAction<BasketActionsTypes.REMOVED, string> => ({
  type: BasketActionsTypes.REMOVED,
  payload: id,
});