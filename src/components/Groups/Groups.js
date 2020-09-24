import React, { Component } from 'react';
import { message } from 'antd';
import GroupName from './GroupName'
import Group from './Group';
import './groups.scss';

class Groups extends Component {
  state = {
    groups: {},
  };

  componentDidMount() {
    URL = 'http://localhost:8080/groups';
    fetch(URL, {
      method: 'GET',
    })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        }
      })
      .then((jsonData) => {
        this.setState({
          groups: jsonData,
        });
      });
  }

  getGroups = () => {
    URL = 'http://localhost:8080/groups/auto-grouping';
    fetch(URL, {
      method: 'POST',
    })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          message.error('分组失败');
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
              group={this.state.groups[key]}
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
