import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

 // 속성 보낼때 {} 넣어야함 문자열은 생략가능
const ExpenseList = ({expenses}) => {

  // 선택된 연도로 재 렌더링하기 위해 연도를 상태값으로 관리
  const [selectYear, setSelectYear] 
  = useState(new Date().getFullYear());


  const onFilterChange = (selectYear) =>{
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력
    console.log(selectYear);
    setSelectYear(selectYear);
  };

  // App.js에서 받은 expense 배열을 <ExpensItem> 배열로 변환하는 함수
  // const convertToComponentArry = () =>{
  //  return expenses
  //  .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);

    // const newArray = [];
    // for (const ex of expenses){
    //   const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />;
    //   newArray.push(tag);
    // }
    // return newArray;
    // };


    return (
      <div className="expenses">
        <ExpenseFilter onfindYear={onFilterChange} />
  
        {expenses
          .filter(ex => ex.date.getFullYear().toString() === selectYear)
          .map(({title,price,date}) => (
          <ExpenseItem
            key={Math.random().toString()}
            title={title}
            price={price}
            date={date}
          />
        ))}
      </div>
    );
  
}


export default ExpenseList 