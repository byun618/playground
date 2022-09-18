import api from '../lib/api'

interface Me {
  id: number
  email: string
  name?: string
}

export const fetchMe = async () => {
  const {
    data: { me },
  } = await api.get<{ me: Me }>('/users/me')

  return me
}
