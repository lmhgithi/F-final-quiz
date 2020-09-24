import React, { Component } from 'react';
import { Modal, message } from 'antd';

import './trainer.scss';

class Trainer extends Component {
  state = {
    deleteTrainerVisible: false,
  };

  deleteTrainer = () => {
    fetch(`http://localhost:8080/trainers/${this.props.trainer.id}`, {
      method: 'DELETE',
    }).then((Response) => {
      if (Response.status === 204) {
        this.setState({
          deleteTrainerVisible: false,
        });
        this.props.getTrainers();
      } else {
        message.error('删除讲师失败');
      }
    });
  };

  render() {
    return (
      <div>
        <p className="student" key={this.props.trainer.id} onClick={() => this.setState({deleteTrainerVisible: true})}>
          {`${this.props.trainer.id}. ${this.props.trainer.name}`}
        </p>
        <Modal
          title="是否要删除学员"
          visible={this.state.deleteTrainerVisible}
          onOk={this.deleteTrainer}
          onCancel={() => this.setState({deleteTrainerVisible: false})}
        >
        </Modal>
      </div>
    );
  }
}

export default Trainer;
