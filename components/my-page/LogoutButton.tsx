import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useToken from '../../hooks/useToken'
import { Button as CustomButton } from '../public'

const Button = styled(CustomButton)`
  display: flex;
  justify-content: center;

  padding: 8px 15px;
  border-radius: 8px;

  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #ffffff;

  background-color: #b72e39;
`

const LogoutButton = () => {
  const router = useRouter()

  const { removeToken } = useToken()

  const onClickLogout = () => {
    removeToken()
    router.replace('/')
  }

  return <Button onClick={onClickLogout}>로그아웃</Button>
}

export default LogoutButton
