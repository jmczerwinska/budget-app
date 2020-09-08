import React from 'react';

const Transaction = ({transaction}) => {
  return (
    <li>
      <span>{transaction.text}</span>
      <span>${transaction.amount}</span>
      <button>Delete</button>
    </li>
  )
}

export default Transaction;
