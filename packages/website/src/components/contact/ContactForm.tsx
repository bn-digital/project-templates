import { FC } from 'react'
import { Button, Form, FormProps, Input } from 'antd'

const formProps: FormProps = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
}

const ContactForm: FC = () => {
  return (
    <Form {...formProps} validateMessages={validateMessages}>
      <Form.Item name={'name'} label='Your Name' required>
        <Input />
      </Form.Item>
      <Form.Item name={'email'} label='Your Email' rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'subject'} label='Subject' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'message'} label='Message' rules={[{ required: false, type: 'string' }]}>
        <Input.TextArea style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...formProps.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export { ContactForm }
