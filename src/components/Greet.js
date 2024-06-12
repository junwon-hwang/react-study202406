import React from "react";
import Card from "./UI/Card";

const Greet = (ccc) => {
  return (
    <Card className='border-green'>
      <h1>
        Hello React!
        {ccc.children}
      </h1>
    </Card>
  );
};

export default Greet;
