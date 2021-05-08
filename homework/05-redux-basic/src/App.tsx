import React, {useState} from 'react';
import './App.css';
import { stateI } from './redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {setBalance, setDebit, setCredit, setTax} from './redux/reducers/actionCreators';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const balanceState = useSelector(
    (state: stateI) => state.transactions.balance
  );

  const [balanceValue, setBalanceValue] = useState<number>(0);
  const [debitValue, setDebitValue] = useState<number>(0);
  const [creditValue, setCreditValue] = useState<number>(0);
  const [taxValue, setTaxValue] = useState<number>(0);

  //setBalance
  const handleBalanceValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBalanceValue(parseInt(e.target.value));
  };

  function onSetBalanceClick(value: number) {
    dispatch(setBalance(value));
    setBalanceValue(0);
  }

  // debit
  const handleDebitValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDebitValue(parseInt(e.target.value));
  };

  function onDebitClick(value: number) {
    dispatch(setDebit(value));
    setDebitValue(0);
  }

  // credit
  const handleCreditValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCreditValue(parseInt(e.target.value));
  };

  function onCreditClick(value: number) {
    dispatch(setCredit(value));
    setCreditValue(0);
  }

  // tax
  const handleTaxValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTaxValue(parseInt(e.target.value));
  };  

  function onTaxClick(value: number) {
    dispatch(setTax(value));
    setTaxValue(0);
  }

  return (
    <div className='app'>
      <h2>Balance: {balanceState}</h2>

      <div className='BlockWrapper'>
        <div className='BlockName'>Set balance, $: </div>
        <div className='controls'>
          <input
            type='number'
            min='0'
            max='1000000'
            onChange={(e) => handleBalanceValueChange(e)}
            value={balanceValue?.toString()}
          />
          <button onClick={() => onSetBalanceClick(balanceValue)}>
            Set balance
          </button>
        </div>
      </div>

      <div className='BlockWrapper'>
        <div className='BlockName'>Debit, $:</div>
        <div className='controls'>
          <input
            type='number'
            min='0'
            max='100000'
            onChange={(e) => handleDebitValueChange(e)}
            value={debitValue?.toString()}
          />
          <button onClick={() => onDebitClick(debitValue)}>Debit</button>
        </div>
      </div>

      <div className='BlockWrapper'>
        <div className='BlockName'>Credit, $:</div>
        <div className='controls'>
          <input
            type='number'
            min='0'
            max='100000'
            onChange={(e) => handleCreditValueChange(e)}
            value={creditValue?.toString()}
          />
          <button onClick={() => onCreditClick(creditValue)}>Credit</button>
        </div>  
      </div>

      <div className='BlockWrapper'>
        <div className='BlockName'>Tax, %:</div>
        <div className='controls'>
        <input
            type='number'
            min='0'
            max='30'
            onChange={(e) => handleTaxValueChange(e)}
            value={taxValue?.toString()}
          />
          <button onClick={() => onTaxClick(taxValue)}>Tax</button>
        </div>
      </div>
    </div>
  );
};

export default App;
