import Expenses from './components/Expenses/Expenses';
import './App.css';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense'
import React,{useState} from 'react';

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
  const  [statedExpenses,setStatedExpenses] = useState(expenses);

  const onAddExpenseHandler = (newExpense) => {
    console.log("In App.js");    
    const updatedExpenses = [
      ...statedExpenses,
      newExpense
    ];
    setStatedExpenses(updatedExpenses);
    console.log(updatedExpenses);
      
    
  };
  
  return (
    <div className="App">
      <Card>
        <NewExpense onAddExpense={onAddExpenseHandler}/>
        <Expenses className="card" expenses={statedExpenses}/>
      </Card>      
    </div>
  );
}

export default App;
