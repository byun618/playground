import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  isValid?: boolean
  warning?: string
}

const Wrapper = styled.div``

const Label = styled.div`
  padding-bottom: 4px;

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #b0b5bb;
`

const StyledInput = styled.input<Partial<InputProps>>`
  width: 100%;

  outline: none;
  border: none;

  padding: 0;
  padding-bottom: 8px;

  border-radius: 0;
  border-bottom: 2px solid ${({ isValid }) => (isValid ? '#61626d' : '#f65b65')};

  background-color: rgba(255, 255, 255, 0);

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #fff;

  :focus {
    border-bottom: 2px solid ${({ isValid }) => (isValid ? '#fff' : '#f65b65')};

    ::placeholder {
      color: transparent;
    }
  }

  ::placeholder {
    color: #b5b9c2;
  }
`

const Warning = styled.div<Partial<InputProps>>`
  padding-top: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: -0.01em;

  color: #f65b65;

  ${({ isValid }) => (isValid ? 'visibility: hidden;' : 'visibility: visible;')}
`

const Input = (props: InputProps) => {
  const { label, warning, isValid = true } = props

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} isValid={isValid} />
      {Boolean(warning) && <Warning isValid={isValid}>{warning}</Warning>}
    </Wrapper>
  )
}

export default Input
