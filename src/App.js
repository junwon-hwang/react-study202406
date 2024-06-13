import "./App.css";
import React from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음
    const expenses = [
      {
        title: '치킨먹음',
        price: 30000,
        date: new Date(2024, 6 -1, 3)
      },
      {
        title: '족발먹음',
        price: 40000,
        date: new Date(2024, 6 -1, 7)
      },
      {
        title: '헬스장등록',
        price: 300000,
        date: new Date(2024, 6 -1, 12)
      },
    ];

 
  return (
      <>
        <NewExpense />
        <ExpenseList expenses={expenses}/>
      </>

  );
};

export default App;
