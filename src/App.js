import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Form from './components/Form';
import History from './components/History';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Balance />
      <Form />
      <History />
      {/* <Menu /> */}
    </div>
  )
}

export default App;
