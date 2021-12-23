import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(2021);

  const onFilterYearChanged = year => {
    setFilterYear(year);
    console.log(year);
  };
  const expenses = props.expenses
    .map(expense => <ExpenseItem title={expense.title}
                                 amount={expense.amount}
                                 date={expense.date} />);
  return (<Card className="expenses">
    <ExpensesFilter onFilterYearChanged={onFilterYearChanged} />
    {expenses}
  </Card>);

}

export default Expenses;