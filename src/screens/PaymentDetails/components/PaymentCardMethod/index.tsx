import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { useAppNavigation } from '@hooks/useAppNavigation'

import { PaymentCardMethodContainer } from './styles'
import { PaymentCardMethodProps } from './types'

export const PaymentCardMethod = (props: PaymentCardMethodProps) => {
  const { type } = props

  const { navigate } = useAppNavigation()

  return (
    <PaymentCardMethodContainer>
      <Input label="Número do cartão" type="phone-pad" />
      <Input label="Nome como impresso no cartão" type="phone-pad" />
      <Input label="CVV" type="phone-pad" />
      <Input label="Data de vencimento" type="phone-pad" />
      <Button
        backgroundColor="PRIMARY"
        onPress={() => navigate('orderConcluded', { paymentMethod: type })}
        text="Confirmar"
      />
    </PaymentCardMethodContainer>
  )
}
