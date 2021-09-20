import { FC } from 'react'
import { Button, Form, FormProps, Input, message } from 'antd'
import { ContactInput, useContactMutation } from '../../graphql'

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
  const [contactMutation] = useContactMutation()
  const messageKey = 'request'
  const [messageApi, context] = message.useMessage()

  const onFinish = (data: ContactInput) => {
    messageApi
      .loading(
        {
          content: 'Send your request ...',
          key: messageKey,
        },
        0,
      )
      .then(() =>
        contactMutation({ variables: { input: { data } } })
          .then(
            result =>
              result?.data &&
              message.success(
                {
                  content: `Thanks for your interest, ${result?.data?.createContact?.contact?.name}! Your message received, ${result?.data.createContact?.contact?.email}`,
                  key: messageKey,
                },
                2000,
              ),
          )
          .catch(reason =>
            messageApi.error(
              {
                content: `Error sending your request: ${reason}`,
                key: messageKey,
              },
              2000,
            ),
          ),
      )
  }

  return (
    <Form<ContactInput> {...formProps} onFinish={onFinish} validateMessages={validateMessages}>
      {context}
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
