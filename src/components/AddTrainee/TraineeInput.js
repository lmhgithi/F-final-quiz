import React, { Component } from 'react';
import { Form, Input, message, Modal } from 'antd';
import './traineeInput.scss';

class TraineeInput extends Component {
  state = {
    displacyForm: false,
    name: '',
    email: '',
    office: '',
    github: '',
  };
  addTrainee = () => {
    fetch('http://localhost:8080/trainees', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        office: this.state.office,
        email: this.state.email,
        github: this.state.github,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((Response) => {
      if (Response.status === 201) {
        this.setState({
          displacyForm: false,
        });
        this.props.getTrainees();
      } else {
        alert('添加学员失败');
      }
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p
          className="add-students-botton"
          onClick={() =>
            this.setState({
              displacyForm: true,
            })
          }
        >
          +添加学员
        </p>
        <Modal
          visible={this.state.displacyForm}
          title="添加学员"
          okText="确认"
          cancelText="取消"
          onCancel={() =>
            this.setState({
              displacyForm: false,
            })}
          onOk={this.addTrainee}
        >
          <Form>
            <Form.Item label="姓名" name="name" rules={[{ required: true, message: '此项为必填' }]}>
              <Input name="name" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ type: 'email', message: '请输入正确的邮箱' }]}
            >
              <Input name="email" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="办公室"
              name="office"
              rules={[{ required: true, message: '此项为必填' }]}
            >
              <Input name="office" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="Github账号"
              name="github"
              rules={[{ required: true, message: '此项为必填' }]}
            >
              <Input name="github" onChange={this.handleChange} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default TraineeInput;
