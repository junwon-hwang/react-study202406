import React, { useState } from 'react';
import UserList from './components/Users/UserList'
import AddUsers from './components/Users/AddUsers';
import ErrorModal from './components/UI/Modal/ErrorModal';
import './App.css';




const App = () => {

  // 회원들이 저장될 배열
  const [userList, setUserList] = useState([]);

  const addUserHandler = user => {
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
