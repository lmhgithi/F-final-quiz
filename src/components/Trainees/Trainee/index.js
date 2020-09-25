import React, { Component } from 'react';
import { Modal, message, Popover } from 'antd';

import './trainee.scss';

class Trainee extends Component {
  state = {
    deleteTraineeVisible: false,
  };

  deleteTrainee = () => {
      //TODO feedback: API请求可以抽到单独的文件中

      fetch(`http://localhost:8080/traineeDtos/${this.props.trainee.id}`, {
      method: 'DELETE',
    }).then((Response) => {
      if (Response.status === 204) {
        this.setState({
          deleteTraineeVisible: false,
        });
        this.props.getTrainees();
      } else {
        message.error('删除学员失败');
      }
    });
  };
  content = (
    <div>
      <p>email: {this.props.trainee.email}</p>
      <p>office: {this.props.trainee.office}</p>
      <p>github: {this.props.trainee.github}</p>
    </div>
  );

  render() {
    return (
      <div>
        <Popover content={this.content}>
          <p className="student" key={this.props.trainee.id} onClick={() => this.setState({deleteTraineeVisible: true})}>
            {`${this.props.trainee.id}. ${this.props.trainee.name}`}
          </p>
        </Popover>,
        
        <Modal
          title="是否要删除学员"
          visible={this.state.deleteTraineeVisible}
          onOk={this.deleteTrainee}
          {/*TODO feedback: 之前说过不要使用这种绑定函数的方法*/}
          onCancel={() => this.setState({deleteTraineeVisible: false})}
        >
        </Modal>
      </div>
    );
  }
}

export default Trainee;
