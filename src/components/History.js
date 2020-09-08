import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const History = () => {
  const { state } = useContext(GlobalContext)

  return (
    <div>
      <h2>Transactions History</h2>
      <ul>
        {state.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  )
}

export default History;
