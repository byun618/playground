import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { CryptoSection, NotLogin } from '../components/home'
import { Page, Section } from '../components/public'
import useToken from '../hooks/useToken'

const Home: NextPage = () => {
  const router = useRouter()
  const { token } = useToken()

  return (
    <Page
      header={{
        router,
        left: 'logo',
      }}
    >
      {token ? (
        <>
          <CryptoSection />
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
