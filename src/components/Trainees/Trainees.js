import React, { Component } from 'react';
import TraineeInput from './TraineeInput';
import Trainee from './Trainee';
import './trainees.scss';

class Trainees extends Component {
  state = {
    students: [],
  };

  componentDidMount = () => {
    this.getTrainees();
  };

  getTrainees = () => {
    URL = 'http://localhost:8080/traineeDtos?grouped=false';
    fetch(URL, {
      method: 'GET',
    })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          Promise.reject();
        }
      })
      .then((jsonData) => {
        this.setState({
          students: jsonData,
        });
      });
  };

  render() {
    return (
      <div className="students-list">
        <h2>学员列表</h2>
        <div className="students-list-content">
          {Object.keys(this.state.students).map((key) => (
            <Trainee key={key} trainee={this.state.students[key]} getTrainees={this.getTrainees} />
          ))}
          <TraineeInput getTrainees={this.getTrainees} />
        </div>
      </div>
    );
  }
}

export default Trainees;
