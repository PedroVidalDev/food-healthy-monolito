import { Icon } from '@components/Icon'

import {
  IconContainer,
  PaymentMethod,
  PaymentMethodsContainer,
  PaymentText,
} from './styles'
import { useNavigation } from '@react-navigation/native'

export const PaymentMethods = () => {
  const navigate = useNavigation()

  const handleClick = (paymentType: 'pix' | 'credit' | 'debit') => {
    navigate.navigate('paymentDetails', {
      paymentType,
    })
  }

  return (
    <PaymentMethodsContainer>
      <PaymentMethod onPress={() => handleClick('pix')}>
        <IconContainer>
          <Icon name="PixLogo" color="BLACK" size={24} />
        </IconContainer>
        <PaymentText> Pix </PaymentText>
      </PaymentMethod>

      <PaymentMethod onPress={() => handleClick('credit')}>
        <IconContainer>
          <Icon name="CreditCard" color="BLACK" size={24} />
        </IconContainer>
        <PaymentText> Cartão de Crédito </PaymentText>
      </PaymentMethod>

      <PaymentMethod onPress={() => handleClick('debit')}>
        <IconContainer>
          <Icon name="Cardholder" color="BLACK" size={24} />
        </IconContainer>
        <PaymentText> Cartão de Débito </PaymentText>
      </PaymentMethod>
    </PaymentMethodsContainer>
  )
}
