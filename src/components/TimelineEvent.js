import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import timelineData from '../data/timeline.json';

const TimelineEvent = (props) => {
  return (
    <div className = "timeline-event" >
    <h1> Name: { props.person } </h1>
    <p> Status: { props.status }</p>
    <p> Time: <Timestamp time = {props.timeStamp} /> </p>
    </div> 
  )
}

export default TimelineEvent;