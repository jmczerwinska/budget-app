import React, { useContext } from 'react';
import BalanceChart from './BalanceChart';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { state } = useContext(GlobalContext);
  const incomes = state.filter(transaction => transaction.type === "income");
  const expenses = state.filter(transaction => transaction.type === "expense");

  const totalIncome = incomes
    .map(transaction => transaction.amount)
    .reduce((a, b) => a + b, 0);

  const totalExpense = expenses
    .map(transaction => transaction.amount)
    .reduce((sum, amount) => sum += amount, 0);
  
  const percent = totalExpense / totalIncome * 100;
  const balance = totalIncome - totalExpense;

  return (
    <div>
      <BalanceChart percent={percent} balance={balance} />
      
      <div>
        <h3>Income</h3>
        <p> +${totalIncome}</p>
      </div>
      <div>
        <h3>Expenses</h3>
        <p>-${totalExpense}</p>
      </div>
    </div>
  )
}

export default Balance;
