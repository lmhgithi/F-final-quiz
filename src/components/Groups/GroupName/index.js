import React, { Component } from 'react';
import './groupName.scss';

class GroupName extends Component {
  state = {
    displayInputBox: false,
    groupName: this.props.group.name,
  };
  changeGroupName = (keyCode) => {
    if (keyCode == 13) {
      URL = `http://localhost:8080/groups/${this.props.group.name}/${this.state.groupName}`;
      fetch(URL, {
        method: 'Put',
      })
        .then((Response) => {
          if (Response.status === 200) {
            this.setState({
                displayInputBox: false,
                groupName: this.state.groupName,
              });
          } else {
            this.setState({
                displayInputBox: false,
                groupName: this.props.group.name,
              });
          }
        });
    }
  };

  displayChangeGroupName = () => {
    this.setState({
      displayInputBox: true,
    });
  };

  handleChange = () => {
      this.setState({
        groupName: event.target.value,
      })
  }
  render() {
    if (this.state.displayInputBox) {
      return (
        <input className="team-name-input"
        onKeyDown={() => this.changeGroupName(event.keyCode)}
        value={this.state.groupName}
        onChange={() => this.handleChange()}
        />
            
      );
    } else {
      return (
        <h3
        className="team-name"
        onClick={() => this.displayChangeGroupName()}
        >
            {this.state.groupName}
        </h3>
      );
    }
  }
}

export default GroupName;
