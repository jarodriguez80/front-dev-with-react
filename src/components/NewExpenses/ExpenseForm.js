import './ExpenseForm.css'
import React,{useState} from 'react';


const ExpenseForm = (properties)=>{
    const [enteredDescription,setEnteredDescription] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const changeDescriptionHandler = (event) => {
        setEnteredDescription(event.target.value);
    };
    const changePriceHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expense ={
            description:enteredDescription,
            price:+enteredPrice,
            date:new Date(enteredDate)
        };
        
        properties.onSaveExpenseData(expense);
        setEnteredDescription('');
        setEnteredPrice('');
        setEnteredDate('');
    };

    return <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Description</label>
                    <input type="text" value={enteredDescription} onChange={changeDescriptionHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" max="100" value={enteredPrice} onChange={changePriceHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-12-31" max ="2022-12-31" value={enteredDate} onChange={changeDateHandler}/>
                </div>            
            </div>
            <div className="new-expense__actions">
                <button type="button" className="" onClick={properties.onCancel}>Cancel</button>
                <button type="submit" className="">Add Expense</button>
            </div>
        </form>
};

export default ExpenseForm;