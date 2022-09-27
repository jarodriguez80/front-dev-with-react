import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react';

const Expenses = ({ expenses }) => {

    const [yearFilter,setYearFilter] = useState('2020'); 

    const onChangeSelectHandler = (year) => {
        console.log("On Expenses");
        setYearFilter(year);
        console.log(yearFilter);
    };

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selectedYear={yearFilter} onChangeSelect={onChangeSelectHandler}/>
            {expenses.map((expense) => (
                <ExpenseItem
                key={expense.id}
                description ={expense.description}
                amount={expense.price}
                date={expense.date}
                />
            ))}
            </Card>
        </div>
    );
};


export default Expenses;