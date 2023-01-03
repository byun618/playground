import api from '../lib/api'

export interface Crypto {
  id: number
  ticker: string
  name: string
  imageUrl: string
}

export interface Me {
  id: number
  email: string
  name?: string
  phone?: string
  cryptos: Crypto[]
}

export const fetchMe = async () => {
  const {
    data: { me },
  } = await api.get<{ me: Me }>('/users/me')

  return me
}
