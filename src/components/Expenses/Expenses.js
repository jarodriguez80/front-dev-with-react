import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';
import ExpensesList from "./ExpensesList"
import ExpensesChart from '../Expenses/ExpensesChart';

const Expenses = ({ expenses }) => {

    const [yearFilter,setYearFilter] = useState('2020'); 

    const onChangeSelectHandler = (year) => {
        console.log("On Expenses");
        setYearFilter(year);
        console.log(yearFilter);
    };

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString()===yearFilter);
    console.log(filteredExpenses);

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selectedYear={yearFilter} onChangeSelect={onChangeSelectHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};


export default Expenses;