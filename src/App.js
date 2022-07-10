import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {

  const expenses=[
    {
      date: new Date(2022,7,9),
      description: "Weight machine",
      price: 160.86
    },
    {
      date: new Date(2022,7,9),
      description: "Smart watch",
      price:789.80
    },
    {
      date: new Date(2022,7,9),
      description: "Sport shoes UA",
      price: 143.80
    }
  ];
  
  return (
    <div className="App">
      <ExpenseItem date={expenses[0].date} description={expenses[0].description} amount={expenses[0].price}></ExpenseItem>
      <ExpenseItem date={expenses[1].date} description={expenses[1].description} amount={expenses[1].price}></ExpenseItem>
      <ExpenseItem date={expenses[2].date} description={expenses[2].description} amount={expenses[2].price}></ExpenseItem>
    </div>
  );
}

export default App;
