import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'
import Input from '../public/Input'
import LeftLabel from './LeftLabel'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr;

  margin-top: 20px;
`

const LoginInfo = () => {
  const me = useMe()

  return (
    <Wrapper>
      <LeftLabel text="로그인 정보" />
      <Input
        label="이메일"
        warning="올바른 메일 형식으로 입력해주세요."
        type="email"
        placeholder={me?.email ?? ''}
      />
      <div></div>
      <Input
        label="이름"
        warning="올바른 메일 형식으로 입력해주세요."
        type="text"
        placeholder={me?.name ?? ''}
      />
    </Wrapper>
  )
}

export default LoginInfo
