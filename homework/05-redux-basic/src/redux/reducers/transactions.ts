import {AnyAction} from "redux";
import {Actions, transactionStateI } from "../types";

const defaultState: transactionStateI = {
    balance: 0
}

export function transactionReducer(state: transactionStateI = defaultState, action: AnyAction) {
    const type: string = action.type;
    const payload: number = action.payload;
    let newState: number;
    
    switch (type) {
        case Actions.UPDATE_BALANCE:
            newState = payload;
            return {...state, balance: Math.round(newState * 100) / 100};
        case Actions.DEBIT:
            console.log(payload);
            newState = state.balance + payload;
            return {...state, balance: Math.round(newState * 100) / 100};
        case Actions.CREDIT:
            newState = state.balance - payload;
            return {...state, balance:  Math.round(newState * 100) / 100};
        case Actions.SET_BALANCE_WITH_TAX:
            newState = state.balance * (1 - payload / 100);
            return {...state, balance: Math.round(newState * 100) / 100};
        default:
            return state;
    }
}

