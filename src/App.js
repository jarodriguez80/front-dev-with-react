import Expenses from './components/Expenses/Expenses';
import './App.css';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense'
import React,{useState} from 'react';

const mockedExpenses=[
  {
    id:"a",
    date: new Date(2022,7,9),
    description: "Weight machine",
    price: 160.86
  },
  {
    id:"b",
    date: new Date(2021,7,9),
    description: "Smart watch",
    price:789.80
  },
  {
    id:"c",
    date: new Date(2020,7,9),
    description: "Sport shoes UA",
    price: 143.80
  }
];

const App = ()=> {
  const  [statedExpenses,setStatedExpenses] = useState(mockedExpenses);

  const onAddExpenseHandler = (newExpense) => {
    setStatedExpenses((prevExpenses)=>{
      return [
        newExpense,
        ...prevExpenses
      ];
    });
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
