import React, { Component } from 'react';
import Groups from '../../components/Groups/Groups';
import Trainees from '../../components/Trainees/Trainees';
import Trainers from '../../components/Trainers/Trainers';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <Groups />
          <Trainers />
          <Trainees />
        </body>
      </div>
    );
  }
}

export default App;
