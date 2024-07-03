import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [eventList, setEventList] = useState([]);

  // useEffect 안에 넣어 단 한번만 실행하도록 함 
  // 아니면 게속해서 sever에 fetch를 보냄
  useEffect(() => {

    // async , await 사용법
    (async () =>{
      const response = await fetch("http://localhost:8282/events")
      const jsonData = await response.json();
      setEventList(jsonData);
    })();

    // than절
    // fetch("http://localhost:8282/events")
    //   .then((res) => res.json())
    //   .then((jsonData) => {
    //     console.log(jsonData);
    //     setEventList(jsonData);
    //   });

  }, []);

  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {eventList.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
