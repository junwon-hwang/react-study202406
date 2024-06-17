import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({onAdd}) => {

  // 목표 인풋에 입력한 값
  const [enteredText, setEnteredText] = useState('');

  // 입력값 검증을 통과했는지 여부를 상태관리
  const [isValid, setisValid] = useState(true);


  const formSubmitHandler = e => {
    e.preventDefault();

    if(enteredText.trim().length === 0){
      setisValid(false);
      return;
    }

    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText
    };
    //console.log(newGoalObject);
    
    onAdd(newGoalObject);
    setEnteredText('');

  };

  const goalChangeHandler = (e) => {

    const inputValue = e.target.value;

    if(inputValue.trim().length > 0){
      setisValid(true);
    } 
    setEnteredText(inputValue);

  };



  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" 
               onChange={goalChangeHandler} 
               value={enteredText}
               style={{
                backgroundColor : isValid ? 'transparent' : 'salmon',
                borderColor : isValid ? 'black' : 'red',
               }}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
