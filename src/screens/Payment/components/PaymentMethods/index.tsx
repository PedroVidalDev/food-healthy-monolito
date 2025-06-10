import { useNavigation } from '@react-navigation/native'

import { Option } from '@components/Option'

import { PaymentMethodsContainer } from './styles'

export const PaymentMethods = () => {
  const navigate = useNavigation()

  const handleClick = (paymentType: 'pix' | 'credit' | 'debit') => {
    navigate.navigate('paymentDetails', {
      paymentType,
    })
  }

  return (
    <PaymentMethodsContainer>
      <Option icon="PixLogo" onPress={() => handleClick('pix')} title="Pix" />
      <Option
        icon="CreditCard"
        onPress={() => handleClick('credit')}
        title="Cartão de Crédito"
      />
      <Option
        icon="Cardholder"
        onPress={() => handleClick('debit')}
        title="Cartão de Débito"
      />
    </PaymentMethodsContainer>
  )
}
