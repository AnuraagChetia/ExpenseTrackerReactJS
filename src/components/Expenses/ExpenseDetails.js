import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.details.title}</h2>
      <div className="expense-item__price">${props.details.amount}</div>
    </div>
  );
};
export default ExpenseDetails;
