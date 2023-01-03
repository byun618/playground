import styled from '@emotion/styled'

interface CryptoNameVolumeProps {
  name: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 16px;

  text-align: left;
  color: #b0b5bb;
`

const Name = styled.div`
  font-weight: 590;
  font-size: 15px;
  line-height: 18px;
`

const Volume = styled.div`
  font-weight: 510;
  font-size: 12px;
  line-height: 14px;
`

const CryptoNameVolume = ({ name }: CryptoNameVolumeProps) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Volume>0.0001</Volume>
    </Wrapper>
  )
}

export default CryptoNameVolume
