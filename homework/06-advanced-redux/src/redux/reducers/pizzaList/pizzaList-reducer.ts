import {AnyAction} from "redux";
import {ThunkAction, ThunkDispatch } from "redux-thunk";

import {RootState} from '../../store';
import {pizzasLoaded} from './pizzaList-actionCreators';
import { getPizza } from '../../../services/api'
import {PizzaListState, State, PizzasActionTypes } from "../../../types";

const defaultState: PizzaListState = [];

export const  loadPizzas = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async function (dispatch: ThunkDispatch<State, void, AnyAction>) {
        const pizzas = await getPizza();
        
        dispatch(pizzasLoaded(pizzas.items));
    }
};

export const pizzaListReducer = (
    state: PizzaListState = defaultState,
    action: AnyAction,
): PizzaListState => {
    switch (action.type) {
        case PizzasActionTypes.PIZZAS_LOADED:
            return action.pizzas
        default:
            return state
    }
};
