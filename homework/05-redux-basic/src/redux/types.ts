export enum Actions  {
  UPDATE_BALANCE = "UPDATE_BALANCE",
  CREDIT = "CREDIT",
  SET_BALANCE_WITH_TAX = "SET_BALANCE_WITH_TAX",
  DEBIT = "DEBIT",
}

export interface transactionStateI {
  balance: number
};

export interface stateI {
  transactions: transactionStateI
};