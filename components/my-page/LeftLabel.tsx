import styled from '@emotion/styled'

interface LeftLabelProps {
  text: string
}

const Wrapper = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`

const LeftLabel = ({ text }: LeftLabelProps) => {
  return <Wrapper>{text}</Wrapper>
}

export default LeftLabel
