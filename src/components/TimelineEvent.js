import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className = "timeline-event" >
    <h1 className = "event-person"> Name: { props.person } </h1>
    <p className = "event-status"> Status: { props.status }</p>
    <p className = "event-time"> Time: <Timestamp time = {props.timeStamp} /> </p>
    </div> 
  )
}

export default TimelineEvent;