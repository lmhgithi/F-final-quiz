import React, { Component } from 'react';
import Groups from '../../components/Groups/Groups';
import Trainees from '../../components/Trainees/Trainees';
import Trainers from '../../components/Trainers/Trainers';
import './App.scss';
import 'antd/dist/antd.css';

class App extends Component {
    //TOOD feedback: groups、trainees和trainers的数据需要存储在同一个组件中.
    // 因为grouping分组会引起TrainerList和TraineeList组件的变化


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
