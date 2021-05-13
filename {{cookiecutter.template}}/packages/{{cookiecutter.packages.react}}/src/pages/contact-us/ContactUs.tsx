import { FC } from 'react'
import { Layout } from 'antd'
import { ContactForm } from '../../components/contact/ContactForm'

const ContactUs: FC = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export { ContactUs }
