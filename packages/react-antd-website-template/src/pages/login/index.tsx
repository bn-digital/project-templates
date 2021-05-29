import { FC } from 'react'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import { useLocalStorageState } from 'ahooks'
import { Button, Layout } from 'antd'
import { Facebook } from '@icons-pack/react-simple-icons'
import { ReactFacebookLoginInfo } from 'react-facebook-login'
import FacebookLogin from 'react-facebook-login'
const Login: FC = () => {
  const [, setToken] = useLocalStorageState('token')
  const responseGoogle = (response: GoogleLoginResponse) => {
    if (response.accessToken) {
      fetch(`${process.env.REACT_APP_API_URL}/auth/google/callback?access_token=${response.accessToken}`)
        .then(response => response.json())
        .then(response => setToken(response.jwt))
    }
  }

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    if (response.accessToken) {
      fetch(`${process.env.REACT_APP_API_URL}/auth/facebook/callback?access_token=${response.accessToken}`)
        .then(response => response.json())
        .then(response => setToken(response.jwt))
    }
  }

  return (
    <Layout>
      <GoogleLogin
        redirectUri={`${process.env.REACT_APP_API_URL}/auth/google/callback`}
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText='Login'
        onSuccess={response => responseGoogle(response as GoogleLoginResponse)}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        size={'small'}
        cookie={true}
        appId={`${process.env.REACT_APP_FACEBOOK_CLIENT_ID}`}
        callback={responseFacebook}
        children={() => (
          <Button icon={<Facebook />} htmlType={'button'} block type={'primary'}>
            Login with Facebook
          </Button>
        )}
        redirectUri={`${process.env.REACT_APP_API_URL}/auth/facebook/callback`}
      />
    </Layout>
  )
}

export default Login
