import { Crypto as CryptoType } from '../../queries/users-me'
import { Section } from './'
import { Crypto } from './crypto-section'

interface CryptoSectionProps {
  cryptos: CryptoType[]
}

const CryptoSection = ({ cryptos }: CryptoSectionProps) => {
  return (
    <Section title="μνΈνν">
      {cryptos.map((crypto) => (
        <Crypto key={`user-cryptos-${crypto.id}`} crypto={crypto} />
      ))}
    </Section>
  )
}

export default CryptoSection
