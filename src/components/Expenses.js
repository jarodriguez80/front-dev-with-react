import './Expenses.css'
import ExpenseItem from './ExpenseItem';



const Expenses = ({ expenses }) => {
    return (
        <div className="expenses">
        {expenses.map((expense, i) => (
            <ExpenseItem
            key={i}
            description={expense.description}
            amount={expense.price}
            date={expense.date}
            />
        ))}
        </div>
    );
};


export default Expenses;