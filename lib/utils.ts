export const validateEmail = (email: string | null) => {
  if (!email) {
    return true
  }

  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  return Boolean(email.match(validRegex))
}
