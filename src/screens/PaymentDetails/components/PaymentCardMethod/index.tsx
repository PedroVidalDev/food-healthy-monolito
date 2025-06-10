import { Input } from '@components/Input'
import { PaymentCardMethodContainer } from './styles'
import { Button } from '@components/Button'

export const PaymentCardMethod = () => {
  return (
    <PaymentCardMethodContainer>
      <Input label="Número do cartão" type="phone-pad" />
      <Input label="Nome como impresso no cartão" type="phone-pad" />
      <Input label="CVV" type="phone-pad" />
      <Input label="Data de vencimento" type="phone-pad" />
      <Button backgroundColor="PRIMARY" onPress={() => {}} text="Confirmar" />
    </PaymentCardMethodContainer>
  )
}
