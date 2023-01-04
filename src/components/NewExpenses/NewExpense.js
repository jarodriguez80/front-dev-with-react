import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React,{useState} from 'react';

const NewExpense = (properties) =>{

    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        properties.onAddExpense(expenseData);
        hideExpenseFormHandler();
    };

    const [loadExpenseForm,setLoadExpenseForm] = useState(false);
    const showExpenseForm = ()=>{
        setLoadExpenseForm(true);
    };
    const hideExpenseFormHandler = ()=>{
        setLoadExpenseForm(false);
    };
    
    const expenseControl = (loadExpenseForm?
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={hideExpenseFormHandler}/>
        :
        <button type="submit" className="" onClick={showExpenseForm}>Add New Expense</button>
    );

    return (
        <div className="new-expense">
            {expenseControl}
        </div>
    );

    
};

export default NewExpense;