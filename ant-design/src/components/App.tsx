import * as React from "react";
import {Button, Form, Input, InputNumber} from 'antd';
import { FormComponentProps } from "antd/lib/form";

interface AccountForm extends FormComponentProps {
  
}
class AccountForm extends React.Component<AccountForm, any> {
  handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log(evt);
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="이름" required>
          <Input />
        </Form.Item>
        <Form.Item label="나이" >
          <InputNumber min={19} max={30} />
        </Form.Item>
        
      </Form>
    )
  }
}

const WrappedAccountForm = Form.create({
  name: 'account_form',
})(AccountForm);

export default WrappedAccountForm;
