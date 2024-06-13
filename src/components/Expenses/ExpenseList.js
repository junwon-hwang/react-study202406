import React from 'react'
import ExpenseItem from './ExpenseItem'

 // 속성 보낼때 {} 넣어야함 문자열은 생략가능
const ExpenseList = ({expenses}) => {
  return (
    <div className='expenses'>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
        // abc={[1,2,3]} 배열
        // abc={{a:1,a:2,a:3}} 객체
        // abc={()=>{}} 함수 
      />
      <ExpenseItem 
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  )
}

export default ExpenseList 