import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const {text, amount, id} = transaction;

  return (
    <li>
      <span>{text}</span>
      <span>${amount}</span>
      <button onClick={() => deleteTransaction(id)}>Delete</button>
    </li>
  )
}

export default Transaction;
