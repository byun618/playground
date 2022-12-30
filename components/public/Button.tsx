import styled from '@emotion/styled'
import { debounce } from 'lodash'
import React, {
  CSSProperties,
  LegacyRef,
  MouseEventHandler,
  ReactNode,
} from 'react'

export interface ButtonProps {
  key?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  disabled?: boolean
  style?: object
  className?: string
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
  }
`

const Button = React.forwardRef(
  (props: CSSProperties & ButtonProps, ref: LegacyRef<HTMLButtonElement>) => {
    const {
      onClick,
      disabled,
      style,
      children,
      className,
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
        ref={ref}
        allowTransform={allowTransform}
      >
        {children}
      </Wrapper>
    )
  },
)

export default Button
