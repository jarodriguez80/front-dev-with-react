import Expenses from './components/Expenses/Expenses';
import './App.css';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense'

const App = ()=> {

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
      <Card>
        <NewExpense/>
        <Expenses className="card" expenses={expenses}/>
      </Card>      
    </div>
  );
}

export default App;
