import type { NextPage } from 'next'
import { Page } from '../components/public'
import useToken from '../hooks/useToken'

const Home: NextPage = () => {
  const { token } = useToken()

  return <Page>{token ? '됨' : '안됨'}</Page>
}

export default Home
