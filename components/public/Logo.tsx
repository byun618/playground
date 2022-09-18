import Button from './Button'
import Image from './Image'
import LogoImage from '../../assets/png/logo.png'
import { MouseEventHandler } from 'react'

interface LogoProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  width?: number
  height?: number
}

const Logo = ({
  onClick = () => {
    // do nothing
  },
  disabled = false,
  width = 205,
  height = 32,
}: LogoProps) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <Image src={LogoImage} alt="logo" width={width} height={height} />
    </Button>
  )
}

export default Logo
