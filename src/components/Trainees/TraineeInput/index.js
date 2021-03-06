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
    fetch('http://localhost:8080/traineeDtos', {
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
        message.error('添加学员失败');
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
            //  TODO feedback:给元素绑定event handler function采用这种方式可能会引起不必要的渲染，从而带来性能问题
          onClick={() =>
            this.setState({
              //TODO feedback: typo error
              displacyForm: true,
            })
          }
        >
          +添加学员
        </p>
        {/*TODO feedback: 好吧，添加学员需要新开一个页面*/}
        <Modal
          visible={this.state.displacyForm}
          title="添加学员"
          okText="确认"
          cancelText="取消"
          onCancel={() =>
            this.setState({
              displacyForm: false,
            })
          }
          onOk={this.addTrainee}
        >
          <Form>
            <Form.Item label="姓名" name="name" rules={[{ required: true, message: '此项为必填' }]}>
              <Input name="name" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ type: 'email', required: true, message: '请输入正确的邮箱' }]}
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
