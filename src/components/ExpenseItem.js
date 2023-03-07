import "./ExpenseItem.css";
function ExpenseItem(props){
  // const expenseDate = new Date(2023, 3, 5);
  // const expenseTitle = "Car Insuranse";
  // const expenseAmount = 256;
  // const locationOfExpenditure = "Assam";
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <div>{locationOfExpenditure}</div> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
