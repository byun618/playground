import type { NextPage } from 'next'
import { Page } from '../components/public'
import useMe from '../hooks/useMe'

const Home: NextPage = () => {
  const me = useMe()

  return <Page>{me ? '됨' : '안됨'}</Page>
}

export default Home
