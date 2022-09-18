import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (properties) =>{

    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        properties.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
};

export default NewExpense;