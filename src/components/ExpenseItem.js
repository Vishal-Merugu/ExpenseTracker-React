import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItem(props) {
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails title={props.title} amount={props.amount} locationOfExpense={props.locationOfExpense}/>
    </Card>
  );
}

export default ExpenseItem;
