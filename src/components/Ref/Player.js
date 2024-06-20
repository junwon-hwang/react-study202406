import React, { useState , useRef} from "react";
import Input from "./Input";

const Player = () => {

  const $nameInput = useRef();
  
  const [enteredName, setEnteredName] = useState('anonymous');

  const nameChangehandler = () =>{
    setEnteredName($nameInput.current.value);
    $nameInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName}!</h2>
      <p>
        <Input ref={$nameInput} type="text"/>
        <button onClick={nameChangehandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
