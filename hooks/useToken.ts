import { useEffect, useState } from 'react'
import { setHeaderToken } from '../lib/api'

const useToken = () => {
  const [token, setToken] = useState<undefined | null | string>(undefined)

  useEffect(() => {
    if (!token) {
      const storageToken = localStorage.getItem('token')

      if (storageToken) {
        setToken(storageToken)
        setHeaderToken(storageToken)
      } else {
        setToken(null)
      }
    }
  }, [token])

  const storeToken = (t: string) => {
    localStorage.setItem('token', t)
    setToken(t)
  }

  const removeToken = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return { token, storeToken, removeToken }
}

export default useToken
