import { ButtonContainer, ButtonText } from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { text, backgroundColor } = props

  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}
