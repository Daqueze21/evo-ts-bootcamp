import {Middleware} from "redux";
import {State, PizzasActionTypes, BasketActionsTypes, Event} from '../types';

export const logger: Middleware<{}, State> = (store) => (next) => (action) => {
  let result: Event;
  
  if (action.type === PizzasActionTypes.PIZZA_VIEWED) {
    result = {
      eventName: action.type,
    };

    console.log(result);
    log(result);
  } else if(action.type === BasketActionsTypes.ADDED ||action.type === BasketActionsTypes.REMOVED) {
    result = {
      eventName: action.type,
      pizzaName: action.payload.name,
      pizzaPrice: action.payload.price,
    };
    console.log(result);
  };
  
  return next(action);
};

const log = (event: Event) => {
  fetch("http://localhost:3001/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((json) => {
      console.log(json);
    })
    .catch((ex) => {
      console.log(ex);
    });
};