import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [formMode, setFormMode] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    setFormMode(false);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);

  };

  const content = formMode
    ?
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} resetFormMode={()=>setFormMode(false)} />
    :
    <button onClick={() => setFormMode(true)}>Add New Expense</button>;

  return <div className="new-expense">
    {content}
  </div>;

};

export default NewExpense;