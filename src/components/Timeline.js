import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import timelineData from '../data/timeline.json';
import Timestamp from './Timestamp';

const Timeline = (props) => {
  console.log(props.events)


  const timeComponents = props.events.map((item, index) => <TimelineEvent key={index} person = {item.person} 
    status = {item.status} timeStamp = {item.timeStamp} />)
  return (
    <div className = "timeline" >  
      {timeComponents}
   </div> 
  )
}

export default Timeline;