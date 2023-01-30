import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { ApolloError } from '@apollo/client'
import { Button, Form, Input, Modal, ModalProps, notification } from 'antd'
import { Dispatch, FC, useMemo } from 'react'
import { useToggle } from 'react-use'

import { useLoginMutation } from '../../graphql'

const AuthModal: FC<
  Pick<ModalProps, 'open'> & { toggle?: (state: boolean) => void; tokenDispatcher?: Dispatch<string> }
> = ({ tokenDispatcher = () => undefined, open = false, toggle = () => undefined }) => {
  const [loginMutation, { loading }] = useLoginMutation()
  const [notifier, context] = notification.useNotification()
  const [hidden, togglePassword] = useToggle(true)

  const login = (input: UsersPermissionsLoginInput) =>
    loginMutation({ variables: { input } })
      .then(result => {
        if (result.data?.login.jwt) {
          tokenDispatcher(result.data.login.jwt)
          notifier.success({ message: `Welcome, ${result.data.login?.user.username}` })
        } else {
          notifier.error({ message: result.errors?.[0]?.message })
        }
      })
      .catch((error: ApolloError) => {
        notifier.error({ message: error.message })
      })

  const PasswordIcon = useMemo(() => (hidden ? EyeInvisibleOutlined : EyeOutlined), [hidden])

  return (
    <>
      {context}
      <Modal bodyStyle={{ padding: '48px 16px 16px' }} open={open} footer={null} onCancel={() => toggle(false)}>
        <Form<UsersPermissionsLoginInput> onFinish={login}>
          <Form.Item label={'Username'} required name={'identifier'}>
            <Input />
          </Form.Item>
          <Form.Item label={'Password'} required name={'password'}>
            <Input type={hidden ? 'password' : 'text'} suffix={<PasswordIcon onClick={togglePassword} />} />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type={'primary'} htmlType={'submit'}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>{' '}
    </>
  )
}

export { AuthModal }
