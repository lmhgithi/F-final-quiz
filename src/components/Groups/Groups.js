import React, { Component } from 'react';
import GroupName from '../GroupName/GroupName'
import Group from '../Group/Group';
import './groups.scss';

class Groups extends Component {
  state = {
    groups: {},
  };

  getGroups = () => {
    URL = 'http://localhost:8080/groups';
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
          groups: jsonData,
        });
      });
  };

  render() {
    return (
      <div className="students-group">
        <div className="group-header">
          <h2>分组列表</h2>
          <button className="group-button" onClick={() => this.getGroups()}>
            分组学员
          </button>
        </div>

        {Object.keys(this.state.groups).map((key) => (
          <div className="group" key={key}>
            <GroupName 
              groupName={this.state.groups[key].groupName}
            />
            <Group 
              group={this.state.groups[key]}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Groups;
