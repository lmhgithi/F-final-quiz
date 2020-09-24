import React, { Component } from 'react';
import './groupName.scss';

class GroupName extends Component {
  state = {
    displayInputBox: false,
    groupName: this.props.group.name,
  };
  changeGroupName = (event) => {
    if (event.keyCode == 13) {
      URL = `http://localhost:8080/groups/${this.props.group.id}`;
      fetch(URL, {
        method: 'Put',
        body: JSON.stringify({
          name: this.state.groupName,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((Response) => {
        if (Response.status === 204) {
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

  handleChange = (event) => {
    this.setState({
      groupName: event.target.value,
    });
  };
  render() {
    console.log(this.props)
    return (
      <div className="team-name">
        {this.state.displayInputBox ? (
          <input
            className="team-name-input"
            onKeyUp={() => this.changeGroupName(event)}
            value={this.state.groupName}
            onChange={() => this.handleChange(event)}
          />
        ) : (
          <p onClick={() => this.displayChangeGroupName()}>{this.state.groupName}</p>
        )}
        <div className="trainers-name">
          {Object.keys(this.props.group.trainerDtoList).map((childrenKey) => (
            <p
              className="trainer"
              key={`${childrenKey}-group`}
            >{`${this.props.group.trainerDtoList[childrenKey].id}.
                    ${this.props.group.trainerDtoList[childrenKey].name}`}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default GroupName;
