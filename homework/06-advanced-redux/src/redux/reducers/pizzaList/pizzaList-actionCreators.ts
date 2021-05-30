import {Pizza, PizzasActionTypes, PizzasLoadedAction} from "../../../types";

export const pizzasLoaded = (pizzas: Pizza[]): PizzasLoadedAction => ({
  type: PizzasActionTypes.PIZZAS_LOADED,
  pizzas: pizzas,
});
