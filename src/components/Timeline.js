import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {

  const timeComponents = props.events.map((item, index) => <TimelineEvent key={index} person = {item.person} 
    status = {item.status} timeStamp = {item.timeStamp} />)
  return (
    <div className = "timeline" >  
      {timeComponents}
   </div> 
  )
}

export default Timeline;