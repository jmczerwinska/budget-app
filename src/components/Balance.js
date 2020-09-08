import React, { useContext } from 'react';
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

  return (
    <div>
      <h2>Your Balance</h2>
  <h3>${totalIncome - totalExpense}</h3>
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
