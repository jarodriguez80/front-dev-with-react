import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props){
    //new Date(2022,7,9);
    //"Weight machine";
    //160.86;

    const expenseDescription = props.description;
    const expenseAmount = props.amount;

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{expenseDescription}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;