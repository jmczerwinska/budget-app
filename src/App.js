import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Form from './components/Form';
import History from './components/History';
import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Header />
        <Balance />
        <Form transactionType="income"/>
        <History />
        {/* <Menu /> */}
      </div>
    </GlobalContextProvider>

  )
}

export default App;
