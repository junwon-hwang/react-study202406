import React, { useState } from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';



const TodoItem = () => {
  

  const [onChange, setOnChange] = useState(false);

  const clickCircle = () => {

    if(onChange){
      setOnChange(false)
    }else{
      setOnChange(true);
    }
  }
   
  return (
    <li className='todo-list-item'>
      <div onClick={clickCircle} className={onChange? 'check-circle active' : 'check-circle'} >
        <MdDone/>
      </div>
      <span className={onChange ? 'text finish' : 'text' }>할 일 어쩌구~~</span>
      <div className='remove'>
        <MdDelete/>
      </div>
    </li>
  );
};

export default TodoItem;