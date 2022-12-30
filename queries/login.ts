import api from '../lib/api'

interface LoginPayload {
  email: string | null
  password: string | null
}

export const postLogin = async ({ email, password }: LoginPayload) => {
  if (!email) {
    throw new Error('이메일을 입력해주세요.')
  }

  if (!password) {
    throw new Error('비밀번호를 입력해주세요.')
  }

  const {
    data: { token },
  } = await api.post<{ token: string }>('/auth/login', {
    email,
    password,
  })

  return token
}
