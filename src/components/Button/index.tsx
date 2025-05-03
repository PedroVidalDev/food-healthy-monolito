import { ButtonContainer, ButtonText } from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const { text, backgroundColor, onPress } = props

  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}
