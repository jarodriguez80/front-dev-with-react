import Expenses from './components/Expenses';
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
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
