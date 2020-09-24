import React, { Component } from 'react';
import './group.scss';

class Group extends Component {
  render() {
    return (
      <div className="students-group-content">
        {Object.keys(this.props.group.students).map((childrenKey) => (
          <p
            className="student"
            key={`${childrenKey}-group`}
          >{`${this.props.group.students[childrenKey].num}.
                    ${this.props.group.students[childrenKey].name}`}</p>
        ))}
      </div>
    )
  }
}

export default Group;