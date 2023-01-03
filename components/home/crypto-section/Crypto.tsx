import styled from '@emotion/styled'
import Temp from '../../../assets/png/temp.png'
import { Crypto as CryptoType } from '../../../queries/users-me'
import { Button, Image } from '../../public'
import { CryptoNameVolume, CryptoPriceRate } from './'

interface CryptoProps {
  crypto: CryptoType
}

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;

  border-radius: 24px;

  padding: 15px 12px;

  :enabled:active {
    background: rgba(60, 60, 65, 0.5) !important;
  }
`

const Crypto = ({ crypto }: CryptoProps) => {
  return (
    <Wrapper>
      <Image src={Temp} alt="temp" width={40} height={40} />
      <CryptoNameVolume name={crypto.name} />
      <CryptoPriceRate />
    </Wrapper>
  )
}

export default Crypto
