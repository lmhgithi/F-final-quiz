import React, { Component } from 'react';
import './traineeInput.scss';


class TrainerInput extends Component {
  state = {
    displayInputBox: false,
    studentName: '',
  };
  addStudent = (keyCode) => {
    if (keyCode == 13) {
      URL = `http://localhost:8080/students/${this.state.studentName}`;
      fetch(URL, {
        method: 'POST',
      })
        .then((Response) => {
          if (Response.status === 200) {
            this.props.getStudents();
          } else {
            Promise.reject();
          }
        });

      this.setState({
        displayInputBox: false,
        studentName: '',
      });
    }
  };

  displayAddStudent = () => {
    this.setState({
      displayInputBox: true,
    });
  };

  handleChange = () => {
      this.setState({
        studentName: event.target.value,
      })
  }
  render() {
    if (this.state.displayInputBox) {
      return (
        <input className="add-students-input-box" 
        name='name'
        onKeyUp={() => this.addStudent(event.keyCode)}
        value={this.state.studentName}
        onChange={() => this.handleChange()}
        />
            
      );
    } else {
      return (
        <p className="add-students-botton" onClick={() => this.displayAddStudent()}>
          +添加学员
        </p>
      );
    }
  }
}

export default TrainerInput;
