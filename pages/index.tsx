import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Page, Section } from '../components/public'
import useToken from '../hooks/useToken'

const Home: NextPage = () => {
  const router = useRouter()
  const { token } = useToken()

  return (
    <Page
      header={{
        router,
      }}
    >
      <Section title="주식" />
      <Section title="마이페이지" />
    </Page>
  )
}

export default Home
