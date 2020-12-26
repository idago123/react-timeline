import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import timelineData from '../data/timeline.json';

const TimelineEvent = (props) => {
 console.log(` timeline event: ${props}`)
  return (
    <div>
    <h1> Name: { props.person } </h1>
    <p> Status: { props.status }</p>
    <p> Time: <Timestamp time = {props.timeStamp} />   </p>
    {/* { props.event.timeStamp } */}
    {/* { props.timeStamp } */}
    </div> 
  )
}

export default TimelineEvent;