import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  PaymentHeaderContainer,
  PaymentHeaderHelp,
  PaymentHeaderRollback,
  PaymentHeaderSubtitle,
} from './styles'

export const PaymentHeader = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>()

  const handleGoBack = () => {
    navigation.navigate('cart')
  }

  return (
    <PaymentHeaderContainer>
      <PaymentHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </PaymentHeaderRollback>
      <PaymentHeaderSubtitle>Pagamento</PaymentHeaderSubtitle>
      <PaymentHeaderHelp>Ajuda</PaymentHeaderHelp>
    </PaymentHeaderContainer>
  )
}
