import { Icon } from '@components/Icon'

import {
  IconContainer,
  PaymentMethod,
  PaymentMethodsContainer,
  PaymentText,
} from './styles'

export const PaymentMethods = () => {
  return (
    <PaymentMethodsContainer>
      <PaymentMethod>
        <IconContainer>
          <Icon name="PixLogo" color="BLACK" size={24} />
        </IconContainer>
        <PaymentText> Pix </PaymentText>
      </PaymentMethod>

      <PaymentMethod>
        <IconContainer>
          <Icon name="CreditCard" color="BLACK" size={24} />
        </IconContainer>
        <PaymentText> Cartão de Crédito </PaymentText>
      </PaymentMethod>

      <PaymentMethod>
        <IconContainer>
          <Icon name="Cardholder" color="BLACK" size={24} />
        </IconContainer>
        <PaymentText> Cartão de Débito </PaymentText>
      </PaymentMethod>
    </PaymentMethodsContainer>
  )
}
