import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Page } from '../components/public'
import useToken from '../hooks/useToken'

const Home: NextPage = () => {
  const router = useRouter()
  const { token } = useToken()

  return (
    <Page
      header={{
        router,
      }}
      full
    >
      {token ? <>asdasd</> : <>asdasd</>}
    </Page>
  )
}

export default Home
