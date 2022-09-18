import styled from '@emotion/styled'
import { debounce } from 'lodash'
import { CSSProperties, MouseEventHandler, ReactNode, RefObject } from 'react'

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  disabled?: boolean
  style?: object
  className?: string
  buttonRef?: RefObject<HTMLButtonElement>
  allowTransform?: boolean
}

interface OverlayBoxStyleType {
  allowTransform?: boolean
}

const Wrapper = styled.button<Partial<ButtonProps>>`
  position: relative;
  display: flex;
  background-color: transparent;

  border-width: 0px;
  padding: 0;
  margin: 0;

  ${'' /* iOS 웹뷰에서 요소 클릭 시 배경색 지정 해제 */}
  -webkit-tap-highlight-color: transparent;

  ${'' /* iOS 15 이상에서 글씨 색 변경 방지*/}
  color: #000;

  :enabled:active {
    transform: ${(props) =>
      props.allowTransform ? `scale(0.99)` : null} !important;

    opacity: ${(props) => (props.allowTransform ? 0.8 : 1)} !important;

    & > .overlayBox {
      background-color: ${(props) =>
        props.allowTransform ? `transparent` : `#fff`};

      opacity: ${(props) => (props.allowTransform ? 1 : 0.2)};
    }
  }
`

const OverlayBox = styled.div<OverlayBoxStyleType>`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;

  background-color: transparent;
`

const Button = (props: CSSProperties & ButtonProps) => {
  const {
    onClick,
    disabled,
    style,
    children,
    className,
    buttonRef,
    allowTransform = true,
  }: ButtonProps = props

  const handleClick = debounce(
    (e) => {
      if (onClick && !disabled) {
        onClick(e)
      }
    },
    500,
    {
      leading: true,
      trailing: false,
    },
  )

  return (
    <Wrapper
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={style}
      ref={buttonRef}
      allowTransform={allowTransform}
    >
      {children}
      <OverlayBox className="overlayBox" allowTransform={allowTransform} />
    </Wrapper>
  )
}

export default Button
