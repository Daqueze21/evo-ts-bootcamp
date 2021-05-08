import {Actions} from "../types";

export const setBalance = (balance : number) => ({type:Actions.UPDATE_BALANCE, payload:balance});
export const setDebit = (value : number) => ({type:Actions.DEBIT, payload:value});
export const setCredit = (value : number) => ({type:Actions.CREDIT, payload:value});
export const setTax = (percent: number) => ({type:Actions.SET_BALANCE_WITH_TAX, payload:percent});