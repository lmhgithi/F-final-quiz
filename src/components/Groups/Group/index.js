import React, { Component } from 'react';
import './group.scss';

class Group extends Component {
  render() {
    return (
      <div className="students-group-content">
        {Object.keys(this.props.group.traineeDtoList).map((childrenKey) => (
          <p
            className="student"
            key={`${childrenKey}-group`}
          >{`${this.props.group.traineeDtoList[childrenKey].id}.
                    ${this.props.group.traineeDtoList[childrenKey].name}`}</p>
        ))}
      </div>
    )
  }
}

export default Group;