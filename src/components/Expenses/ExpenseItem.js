import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react'

const ExpenseItem = (props) => {
    //new Date(2022,7,9);
    //"Weight machine";
    //160.86;

    const [expenseDescription,setExpenseDescription] = useState(props.description);
    const expenseAmount = props.amount;

    const clickHandler = () => {
        setExpenseDescription("Updated!");
    }

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{expenseDescription}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Click to update!!!</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;