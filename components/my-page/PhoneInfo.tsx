import styled from '@emotion/styled'
import useMe from '../../hooks/useMe'
import Input from '../public/Input'
import LeftLabel from './LeftLabel'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  margin-top: 30px;
`

const PhoneInfo = () => {
  const me = useMe()

  return (
    <Wrapper>
      <LeftLabel text="휴대폰 정보" />
      <Input label="휴대폰 정보" type="text" placeholder={me?.phone ?? ''} />
    </Wrapper>
  )
}

export default PhoneInfo
