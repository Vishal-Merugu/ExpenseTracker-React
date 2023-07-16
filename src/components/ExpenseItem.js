import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) { 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title} amount={props.amount} locationOfExpense={props.locationOfExpense}/>
    </div>
  );
}

export default ExpenseItem;
