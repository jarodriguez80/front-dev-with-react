import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem"

const ExpensesList = (props) => {
    if(props.items.length === 0)
        return (<h2 className="expenses-list__fallback">No data found</h2>);

    return (
        <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
            key={expense.id}
            description ={expense.description}
            amount={expense.price}
            date={expense.date}
            />
        ))}
        </ul>
    );
};

export default ExpensesList;    