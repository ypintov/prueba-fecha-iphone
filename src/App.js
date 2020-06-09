import React from 'react';
import './App.css';
import { dateFormat } from './util/formatUtils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {
            `DateFormat: ${dateFormat("2019-06-13T00:00:00.000")}`
          }
        </p>
        <p>
          {
            `Date Value: ${new Date("2019-06-13T00:00:00.000")}`
          }
        </p>
        <p>
          Test 1
      </p>
      </header>
    </div>
  );
}

export default App;
