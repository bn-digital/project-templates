import { FC } from 'react'
import { Button, Form, FormProps, Input, message, Select } from 'antd'
import { ValidateMessages } from 'rc-field-form/lib/interface'
import { useCreateContactFormRequestMutation, useCountriesQuery, ContactFormRequestInput } from '../../graphql'
import { Option } from 'antd/lib/mentions'
import TextArea from 'antd/lib/input/TextArea'

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
const ContactForm: FC = () => {
  const { data, loading } = useCountriesQuery()
  const [createContactFormRequest] = useCreateContactFormRequestMutation()
  const messageKey = 'request'
  const onFinish = (data: ContactFormRequestInput) => {
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
                  content: `Thanks for your interest, ${result?.data?.createContactFormRequest?.contactFormRequest?.firstName}! Your message received, ${result?.data.createContactFormRequest?.contactFormRequest?.email}`,
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
      <Form.Item name={'firstName'} label='First Name'>
        <Input />
      </Form.Item>
      <Form.Item name={'lastName'} label='Last Name'>
        <Input />
      </Form.Item>
      <Form.Item name={'email'} label='Email' rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'country'} label='Email'>
        <Select
          showSearch
          placeholder='Search to Select'
          optionFilterProp='children'
          filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          }
        >
          {data?.countries?.map(it => (
            <Option key={it.id} value={it.id}>
              {it.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name={'message'} label='Message' rules={[{ required: false, type: 'string' }]}>
        <TextArea style={{width: '100%'}} />
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
