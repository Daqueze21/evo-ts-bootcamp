import { Action } from 'redux';

export type Pizza = {
  name: string;
  price: number;
  _id: string;
};

export type PizzaListState = Pizza[];

export type BasketState = ReadonlyArray<Pizza & { count: number }>;

export type State = {
  pizza: PizzaListState;
  basket: BasketState;
};

export enum PizzasActionTypes {
  PIZZAS_LOADED = "pizzaList/PIZZAS_LOADED"
};
export type PizzasLoadedAction = {
  type: PizzasActionTypes.PIZZAS_LOADED,
  pizzas: Pizza[]
};

export enum BasketActionsTypes {
  ORDER = 'basket/ORDER',
  ADDED = 'basket/PIZZA_ADDED_TO_BASKET',
  REMOVED = 'basket/PIZZA_REMOVED_FROM_BASKET',
};

export type PayloadAction<T extends string = string, P = any> = Action<T> & {
  payload: P
};