import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses (props){

    const expenses = props.expenses;

    return (
        <div className="expenses">
            <ExpenseItem date={expenses[0].date} description={expenses[0].description} amount={expenses[0].price}></ExpenseItem>
            <ExpenseItem date={expenses[1].date} description={expenses[1].description} amount={expenses[1].price}></ExpenseItem>
            <ExpenseItem date={expenses[2].date} description={expenses[2].description} amount={expenses[2].price}></ExpenseItem>
        </div>
    );
}

export default Expenses;