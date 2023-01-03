import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { CryptoSection, NotLogin, Section } from '../components/home'
import { Page } from '../components/public'
import useMe from '../hooks/useMe'
import useToken from '../hooks/useToken'

const Home: NextPage = () => {
  const router = useRouter()

  const { token } = useToken()
  const me = useMe()

  return (
    <Page
      header={{
        router,
        left: 'logo',
      }}
    >
      {token && me ? (
        <>
          <CryptoSection cryptos={me.cryptos} />
          <Section
            title="마이페이지"
            onClick={() => {
              router.push('/my-page')
            }}
          />
        </>
      ) : (
        <NotLogin />
      )}
    </Page>
  )
}

export default Home
