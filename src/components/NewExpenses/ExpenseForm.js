import './ExpenseForm.css'

const ExpenseForm = ()=>{
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Description</label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="number" min="0.01" max="100"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-12-31" max="2022-12-31"/>
            </div>            
        </div>
        <div className="new-expense__actions">
            <button type="submit" className="">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;