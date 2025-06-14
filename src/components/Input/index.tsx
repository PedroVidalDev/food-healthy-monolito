import { InputContainer, InputLabel, InputText } from './styles'

import { InputProps } from './types'

export const Input = (props: InputProps) => {
  const { label, type = 'default' } = props

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder="Digite aqui..." keyboardType={type} />
    </InputContainer>
  )
}
