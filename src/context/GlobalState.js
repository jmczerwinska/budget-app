import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = [
  { id: "1", text: "salary", amount: 3000.00, type: "income" },
  { id: "2", text: "rent", amount: 300.00, type: "expense" },
  { id: "3", text: "food", amount: 300.00, type: "expense" }
]

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }

  return (
    <GlobalContext.Provider value={{
      state,
      addTransaction,
      deleteTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}