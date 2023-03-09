import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  const clickHandler = () =>{
    console.log('Deleted')
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails details={props}></ExpenseDetails>
      <button id="btn" onClick={clickHandler}>Delete</button>
    </div>
    
  );
};
export default ExpenseItem;
