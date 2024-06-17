import React, { useState } from 'react';
import UserList from './components/Users/UserList'
import './App.css';
import AddUsers from './components/Users/AddUsers';




const App = () => {
  
 
  return (
    <>
      <AddUsers />
      <UserList />
    </>
  );
};

export default App;
