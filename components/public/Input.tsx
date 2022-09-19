import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  warning?: string
  isValid?: boolean
}

const Wrapper = styled.div``

const Label = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-bottom: 10px;
`

const StyledInput = styled.input<Partial<InputProps>>`
width: 100%;

font-size: 14px;
line-height: 22px;

padding: 8px 0 8px 10px;
margin: 0;

border: 1px solid
  ${({ isValid }) => (isValid ? '#dfe1e3' : '#f65b65')};

border-radius: 8px;
outline: none;

color: #4c5965;

:focus {
  border: 1px solid
    ${({ isValid }) => (isValid ? '#4c8fce' : '#f65b65')};
`

const Warning = styled.div<Partial<InputProps>>`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  margin-top: 5px;

  color: #f65b65;

  ${({ isValid }) => (isValid ? 'visibility: hidden;' : 'visibility: visible;')}
`

const Input = (props: InputProps) => {
  const { label, warning, isValid = true } = props

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} isValid={isValid} />
      {warning && <Warning isValid={isValid}>{warning}</Warning>}
    </Wrapper>
  )
}

export default Input
