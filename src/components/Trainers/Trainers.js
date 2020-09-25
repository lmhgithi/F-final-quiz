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
    URL = 'http://localhost:8080/trainerDtos?grouped=false';
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
      //  TODO feedback: 页面的模块划分非常明显，需要第一层的div换为section标签更合适
      <div className="trainers-list">
        <h2>讲师列表</h2>
        <div className="trainers-list-content">
          {/*TODO feedback: 列表元素没有使用ul li*/}
          {Object.keys(this.state.trainers).map((key) => (
            <Trainer key={key} trainer={this.state.trainers[key]} getTrainers={this.getTrainers} />
          ))}
          <TrainerInput getTrainers={this.getTrainers} />
        </div>
      </div>
    );
  }
}

export default Trainers;
