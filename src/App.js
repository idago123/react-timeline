import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  // console.log(timelineData.events);
  // const timeComponents = timelineData.events.map((item, index) => <Timeline key={index} event={item} />)

// console.log(timeComponents)
  // Customize the code below
  // console.log(Timeline)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        < Timeline events = {timelineData.events} />
        {/* <h1> <Timeline /></h1> */}
        {/* <h2> <TimelineEvent person = "ida" status = "pending" timeStamp = "test"/></h2> */}
      </main>
    </div>
  );
}

export default App;
