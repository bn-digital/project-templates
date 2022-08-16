import { ApolloError } from '@apollo/client'
import { Button, Form, Input, Modal, ModalProps, notification } from 'antd'
import { Dispatch, FC, SetStateAction } from 'react'
import { useLoginMutation } from 'src/graphql'

const AuthModal: FC<
  Pick<ModalProps, 'visible'> & { toggle: (state: boolean) => void; tokenDispatcher: Dispatch<SetStateAction<string | null | undefined>> }
> = ({ tokenDispatcher, visible = false, toggle = () => undefined }) => {
  const [loginMutation] = useLoginMutation()
  const [notifier, context] = notification.useNotification()

  const login = (input: UsersPermissionsLoginInput) =>
    loginMutation({
      variables: {
        input,
      },
    })
      .then(result => {
        if (result.data?.login.jwt) {
          tokenDispatcher(result.data?.login.jwt)
          notifier.success({ message: `Welcome, ${result.data.login?.user.username}` })
        } else {
          notifier.error({ message: result.errors?.[0]?.message })
        }
      })
      .catch((error: ApolloError) => {
        notifier.error({ message: error.message })
      })

  return (
    <Modal bodyStyle={{ padding: '48px 16px 16px' }} visible={visible} footer={null} onCancel={() => toggle(!visible)}>
      {context}
      <Form<UsersPermissionsLoginInput> onFinish={login}>
        <Form.Item label={'Username'} name={'identifier'}>
          <Input />
        </Form.Item>
        <Form.Item label={'Password'} name={'password'}>
          <Input type={'password'} />
        </Form.Item>
        <Form.Item>
          <Button type={'primary'} htmlType={'submit'}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export { AuthModal }
