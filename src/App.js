import React, { useState , useRef } from 'react';
import UserList from './components/Users/UserList'
import AddUsers from './components/Users/AddUsers';
import './App.css';




const App = () => {



  // 회원들이 저장될 배열
  const [userList, setUserList] = useState([]);

  // 일반 변수는 렌더링시  기억 유지 불가
  // let cnt = 1;

  // useRef는 렌더링시 기억 유지 가능
  const count = useRef(1);
  console.log('count: ', count);

  const addUserHandler = user => {
    count.current++;
    console.log('count.current: ', count.current);

    console.log(user);
    setUserList(prev => [...prev, {...user, id: Math.random().toString()}]);
  };
 
  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </>
  );
};

export default App;
