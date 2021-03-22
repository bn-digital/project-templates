import { FC } from 'react'
import { Button, Form, FormProps, Input, message } from 'antd'
import { ValidateMessages } from 'rc-field-form/lib/interface'
import { useCreateContactFormRequestMutation, ContactFormRequest } from '../../graphql'

const formProps: FormProps = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const validateMessages: ValidateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
}
type ContactFormValues = Pick<ContactFormRequest, 'name' | 'email' | 'message'>
const ContactForm: FC = () => {
  const [createContactFormRequest] = useCreateContactFormRequestMutation()
  const messageKey = 'request'
  const onFinish = (data: ContactFormValues) => {
    message
      .loading(
        {
          content: 'Send your request ...',
          key: messageKey,
        },
        0,
      )
      .then(() =>
        createContactFormRequest({ variables: { input: { data } } })
          .then(
            result =>
              result?.data &&
              message.success(
                {
                  content: `Thanks for your interest, ${result.data.createContactFormRequest.contactFormRequest.name}! Your message received, ${result.data.createContactFormRequest.contactFormRequest.name}`,
                  key: messageKey,
                },
                2000,
              ),
          )
          .catch(reason =>
            message.error(
              {
                content: `Error sending your request: ${reason}`,
                key: messageKey,
              },
              2000,
            ),
          )
          .finally(() => message.destroy(messageKey)),
      )
  }

  return (
    <Form {...formProps} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={'name'} label='Name'>
        <Input />
      </Form.Item>
      <Form.Item name={'email'} label='Email' rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'message'} label='Your message'>
        <Input.TextArea />
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
