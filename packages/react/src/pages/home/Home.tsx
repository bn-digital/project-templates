import { FC } from 'react'
import { Layout } from 'antd'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import { useLocalStorageState } from 'ahooks'

const Home: FC = ({ children }) => {
  const [, setToken] = useLocalStorageState('token')
  const responseGoogle = (response: GoogleLoginResponse) => {
    if (response.accessToken) {
      fetch(`${process.env.REACT_APP_API_URL}/auth/google/callback?access_token=${response.accessToken}`)
        .then(response => response.json())
        .then(response => setToken(response.jwt))
    }
  }

  return (
    <Layout>
      <GoogleLogin redirectUri={`${process.env.REACT_APP_API_URL}/auth/google/callback`}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText='Login'
        onSuccess={response => responseGoogle(response as GoogleLoginResponse)}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      {children}
    </Layout>
  )
}

export { Home }
