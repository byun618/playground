import styled from '@emotion/styled'
import Temp from '../../../assets/png/temp.png'
import { Button, Image } from '../../public'
import { CryptoNameVolume, CryptoPriceRate } from './'

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;

  border-radius: 24px;

  padding: 15px 12px;

  :enabled:active {
    background: rgba(60, 60, 65, 0.5) !important;
  }
`

const Crypto = () => {
  return (
    <Wrapper>
      <Image src={Temp} alt="temp" width={40} height={40} />
      <CryptoNameVolume />
      <CryptoPriceRate />
    </Wrapper>
  )
}

export default Crypto
