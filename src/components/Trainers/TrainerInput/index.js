import React, { Component } from 'react';
import { message } from 'antd';
import './trainerInput.scss';

export default class TrainerInput extends Component {
  state = {
    displayTrainerInput: false,
    name: '',
  };
  addTrainer = (event) => {
    if (event.keyCode == 13) {
      URL = `http://localhost:8080/trainerDtos`;
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((Response) => {
        if (Response.status === 201) {
          this.props.getTrainers();
        } else {
          message.error('添加讲师失败');
        }
      });

      this.setState({
        displayTrainerInput: false,
        name: '',
      });
    }
  };

  displayAddTrainer = () => {
    this.setState({
      displayTrainerInput: true,
    });
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    if (this.state.displayTrainerInput) {
      return (
        <input
          className="add-trainers-input-box"
          name="name"
          onKeyUp={() => this.addTrainer(event)}
          value={this.state.name}
          onChange={() => this.handleChange(event)}
        />
      );
    } else {
      return (
        <p className="add-trainers-botton" onClick={() => this.displayAddTrainer()}>
          +添加讲师
        </p>
      );
    }
  }
}
