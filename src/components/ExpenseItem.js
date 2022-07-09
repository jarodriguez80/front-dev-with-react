import './ExpenseItem.css';

function ExpenseItem (){
    return (
        <div className="expense-item">
            <div>Jun 9 2022</div>
            <div className="expense-item__description">
                <h2>Weight machine</h2>
                <div className="expense-item__price">$160.86</div>
            </div>
        </div>
    );
}

export default ExpenseItem;