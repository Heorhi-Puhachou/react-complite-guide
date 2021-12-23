import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const INIT_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(INIT_EXPENSES);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const addExpenseHandler = expense => {
    // JS REACT MAGIC!!!
    // If yo pass a function to this state update function (setExpenses)
    // this function automatically receive the latest state snapshot (prevExpenses)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
