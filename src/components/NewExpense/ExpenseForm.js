import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
  };

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={event => setEnteredTitle(event.target.value)} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={event => setEnteredAmount(event.target.value)} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={event => setEnteredDate(event.target.value)} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add expense</button>
      <button onClick={props.resetFormMode}>Cancel</button>
    </div>
  </form>;

};

export default ExpenseForm;