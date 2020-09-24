import React, { Component } from 'react';
import TrainerInput from './TrainerInput';
import Trainer from './Trainer';
import './trainers.scss';

class Trainers extends Component {
  state = {
    trainers: [],
  };

  componentDidMount = () => {
    this.getTrainers();
  };

  getTrainers = () => {
    URL = 'http://localhost:8080/trainers';
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
          trainers: jsonData,
        });
      });
  };

  render() {
    return (
      <div className="trainers-list">
        <h2>讲师列表</h2>
        <div className="trainers-list-content">
          {Object.keys(this.state.trainers).map((key) =>
            this.state.trainers[key].groupId ? null : (
              <Trainer
                key={key}
                trainer={this.state.trainers[key]}
                getTrainers={this.getTrainers}
              />
            )
          )}
          <TrainerInput getTrainers={this.getTrainers} />
        </div>
      </div>
    );
  }
}

export default Trainers;
