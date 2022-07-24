import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';



const Expenses = ({ expenses }) => {
    
    return (
        <Card className="expenses">
        {expenses.map((expense, i) => (
            <ExpenseItem
            key={i}
            description ={expense.description}
            amount={expense.price}
            date={expense.date}
            />
        ))}
        </Card>
    );
};


export default Expenses;