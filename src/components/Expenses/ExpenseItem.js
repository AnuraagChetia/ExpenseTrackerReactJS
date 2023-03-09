import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails details={props}></ExpenseDetails>
    </div>
    
  );
};
export default ExpenseItem;
