import {Pizza, PizzasActionTypes, PizzasLoadedAction} from "../../../types";

export const pizzasLoaded = (pizzas: Pizza[]): PizzasLoadedAction => ({
  type: PizzasActionTypes.PIZZA_VIEWED,
  pizzas: pizzas,
});
