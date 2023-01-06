import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Temp from '../../../assets/png/temp.png'
import { Crypto as CryptoType } from '../../../queries/users-me'
import { Button, Image } from '../../public'
import { CryptoNameVolume, CryptoPriceRate } from './'
import { WebsocketClient } from 'binance'

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
  const wsKey = `usdm_kline_${crypto.ticker.toLowerCase()}_1d`
  const [socket, setSocket] = useState<WebsocketClient | null>(null)

  const [price, setPrice] = useState<number>(0)
  const [rate, setRate] = useState<number>(0)
  const [diff, setDiff] = useState<number>(0)

  useEffect(() => {
    if (socket) {
      return
    }

    const tempSocket = new WebsocketClient({
      api_key: process.env.NEXT_PUBLIC_BINANCE_API_KEY,
      api_secret: process.env.NEXT_PUBLIC_BINANCE_SECRET_KEY,
      beautify: true,
      disableHeartbeat: true,
    })

    setSocket(tempSocket)
  }, [])

  useEffect(() => {
    if (!socket) {
      return
    }

    socket.on('formattedMessage', (data: any) => {
      const {
        kline: { open, close },
      } = data

      const diff = close - open
      const rate = (diff / open) * 100
      setPrice(close)
      setRate(rate)
      setDiff(diff)
    })

    socket.on('error', (data) => {
      console.log('ws saw error ', data?.wsKey)
    })

    socket.on('close', () => {
      console.log('socket closed')
    })

    socket.subscribeKlines(crypto.ticker, '1d', 'usdm', true)

    return () => {
      socket.close(wsKey)
    }
  }, [socket])

  return (
    <Wrapper>
      <Image src={Temp} alt="temp" width={40} height={40} />
      <CryptoNameVolume name={crypto.name} />
      <CryptoPriceRate price={price} rate={rate} diff={diff} />
    </Wrapper>
  )
}

export default Crypto
