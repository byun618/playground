import { atom, selector } from 'recoil'
import { validateEmail } from '../lib/utils'

export const emailState = atom<string | null>({
  key: 'login-email',
  default: null,
})

export const passwordState = atom<string | null>({
  key: 'login-password',
  default: null,
})

export const isValidEmailState = selector<boolean>({
  key: 'login-is-valid-email',
  get: ({ get }) => {
    const email = get(emailState)

    return validateEmail(email)
  },
})

export const isValidPasswordState = selector<boolean>({
  key: 'login-is-valid-password',
  get: ({ get }) => {
    const password = get(passwordState)

    return password !== ''
  },
})

export const isAbleToLoginState = selector<boolean>({
  key: 'login-is-able-to-login',
  get: ({ get }) => {
    const email = get(emailState)
    const password = get(passwordState)
    const isValidEmail = get(isValidEmailState)
    const isValidPassword = get(isValidPasswordState)

    return Boolean(email && password && isValidEmail && isValidPassword)
  },
})
