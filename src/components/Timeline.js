import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timelineData from '../data/timeline.json';
import Timestamp from './Timestamp';

const Timeline = (props) => {
  console.log(props.events)
 
  // const timeComponents = props.events.map((item, index) =>  {
  // if (props === null) {
  //   return props;
  // } else {
  //   return <TimelineEvent key={index} event={item} />;
  // })

  const timeComponents = props.events.map((item, index) => <TimelineEvent key={index} person = {item.person} 
    status = {item.status} timeStamp = {item.timeStamp} />)
// console.log(timeComponents)
  return (
    <div>  
      {timeComponents}
    {/* <h1> Name: { props.event.person } </h1>
    <p> Status: { props.event.status }</p>
    <p> Time: { props.event.timeStamp } </p>
    <Timestamp time = {props.timeStamp} /> */}
   </div> 
  )
}

export default Timeline;