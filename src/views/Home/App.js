import React, { Component } from 'react';
import Groups from '../../components/Groups/Groups';
import Trainees from '../../components/Trainees/Trainees';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <Groups />
          <Trainees />
        </body>
      </div>
    );
  }
}

export default App;
