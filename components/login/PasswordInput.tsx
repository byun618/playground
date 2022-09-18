import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-top: 10px;
`

const Label = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 10px;
`

const Input = styled.input`
  width: 100%;

  font-size: 14px;
  line-height: 22px;

  padding: 8px 0 8px 10px;
  margin: 0;

  border: 1px solid #dfe1e3;
  border-radius: 8px;
  outline: none;

  color: #4c5965;
`

const Warning = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-top: 5px;

  color: #f65b65;

  visibility: hidden;
`

const PasswordInput = () => {
  return (
    <Wrapper>
      <Label>비밀번호</Label>
      <Input type="password" />
      <Warning>비밀번호를 입력해주세욘</Warning>
    </Wrapper>
  )
}

export default PasswordInput
