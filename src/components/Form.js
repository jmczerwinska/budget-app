import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" name="title" />
        <input type="number" name="amount" placeholder="Amount" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form;
