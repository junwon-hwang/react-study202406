import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({exDate}) => {

  console.log(exDate);
   
 
  return (
    <div className="expense-date">
      <div className="expense-date__year">{exDate.getFullYear()}</div>
      <div className="expense-date__month">{exDate.toLocaleString('en-US', {month: 'long'})}</div>
      <div className="expense-date__day">{exDate.getDate()}</div>
    </div>
  )
}

export default ExpenseDate