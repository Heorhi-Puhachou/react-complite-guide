import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2021');

  const onFilterYearChanged = year => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filterYear);

  return (<Card className="expenses">
    <ExpensesFilter selected={filterYear} onFilterYearChanged={onFilterYearChanged} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList filteredExpenses={filteredExpenses} />
  </Card>);

}

export default Expenses;