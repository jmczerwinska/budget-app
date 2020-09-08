import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const Form = ({ transactionType }) => {
  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text,
      amount: amount,
      type: transactionType
    };

    addTransaction(newTransaction);

    setText('');
    setAmount(0);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)} />
        <input
          type="number"
          step="0.01"
          value={amount.toFixed(2)}
          name="amount"
          onChange={(e) => setAmount(e.target.value * 1)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form;
