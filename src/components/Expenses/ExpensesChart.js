import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: '300', value: 0 },
    { label: '400', value: 0 },
    { label: '500', value: 0 },
    { label: '600', value: 0 },
    { label: '700', value: 0 },
    { label: '800', value: 0 },
    { label: '900', value: 0 },
    { label: '100', value: 0 },
    { label: '110', value: 0 },
    { label: '120', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expensesMonth = expense.date.getMonth();
    chartDataPoints[expensesMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;