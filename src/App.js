import React from 'react';
import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

function App() {
  const percentage = 66;
  return (
    <div className="App">
      <div id="circle-wrapper">
        <div id="circle">
          <CircularProgressbar
            percentage={percentage}
            text={`${percentage}%`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
