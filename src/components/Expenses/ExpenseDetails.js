import "./ExpenseItem.css";
import React, { useState } from "react";
const ExpenseDetails = (props) => {
  const [title,setTitle] = useState(props.details.title);
  const [expense,setExpense] = useState(props.details.amount);
  const clickHandler = () =>{
    setTitle('Updated!!!')
    console.log(title);
  }
  const changeExpense = () =>{
    setExpense('100');  
    console.log(expense);
  }
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${expense}</div>
      <button onClick={clickHandler}>Delete</button>
      <button onClick={changeExpense}>Amount</button>
    </div>
  );
};
export default ExpenseDetails;
