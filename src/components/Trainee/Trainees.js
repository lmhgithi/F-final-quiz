import React, { Component } from 'react';
import TraineeInput from '../AddTrainee/TraineeInput';
import './trainees.scss';

class Trainees extends Component {
  state = {
    students: [],
  };

  componentDidMount = () => {
    this.getTrainees();
  };

  getTrainees = () => {
    URL = 'http://localhost:8080/trainees';
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
  }

  render() {
    console.log(this.state)
    return (
      <div className="students-list">
        <h2>学员列表</h2>
        <div className="students-list-content">
          {Object.keys(this.state.students).map((key) => (
            <p className="student" key={key}>
              {`${this.state.students[key].id}. ${this.state.students[key].name}`}
            </p>
          ))}
          <TraineeInput getTrainees={this.getTrainees}/>
        </div>
      </div>
    );
  }
}

export default Trainees;
