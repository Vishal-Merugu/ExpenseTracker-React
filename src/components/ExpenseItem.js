import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";

function ExpenseItem(props) {
  return React.createElement(
    Card,
    { className: "expense-item" },
    React.createElement(ExpenseDetails, {
      title: props.title,
      amount: props.amount,
      locationOfExpense: props.locationOfExpense,
    })
  );

  // return (
  //   <Card className="expense-item">
  //     <ExpenseDate date={props.date} />
  //     <ExpenseDetails
  //       title={props.title}
  //       amount={props.amount}
  //       locationOfExpense={props.locationOfExpense}
  //     />
  //   </Card>
  // );
}

export default ExpenseItem;
