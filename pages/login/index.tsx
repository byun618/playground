import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Page } from '../../components/public'

const Login: NextPage = () => {
  const router = useRouter()

  return (
    <Page
      header={{
        router,
        left: 'back',
      }}
      full
    >
      fhrmdls
    </Page>
  )
}

export default Login
