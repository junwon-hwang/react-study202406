import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetail = () => {


  // 사용범위가 본인 컴포넌트와 그 하위 컴포넌트(children은 하위가 아님)
  // const ev = useLoaderData(); // 자신의 loader를 불러봄

  const ev = useRouteLoaderData('event-detail');

  return <EventItem event={ev} />;
};

export default EventDetail;


export const loader = async ({params}) =>{

  // use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용 가능 
  // const {eventId : id} = useParams();

  const {eventId : id} = params;


  const response = await fetch(`http://localhost:8282/events/${id}`);
  return await response.json();

};