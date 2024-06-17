import React, { useState } from 'react';
import UserList from './components/Users/UserList'
import './App.css';
import AddUsers from './components/Users/AddUsers';




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
