import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    //new Date(2022,7,9);
    //"Weight machine";
    //160.86;

    const expenseDescription = props.description;
    const expenseAmount = props.amount;

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{expenseDescription}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;