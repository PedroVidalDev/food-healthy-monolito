import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  PaymentHeaderContainer,
  PaymentHeaderHelp,
  PaymentHeaderHelpContainer,
  PaymentHeaderRollback,
  PaymentHeaderSubtitle,
} from './styles'

export const PaymentHeader = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>()

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  const handleGoHelp = () => {
    navigation.navigate('help')
  }

  return (
    <PaymentHeaderContainer>
      <PaymentHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </PaymentHeaderRollback>
      <PaymentHeaderSubtitle>Pagamento</PaymentHeaderSubtitle>
      <PaymentHeaderHelpContainer onPress={handleGoHelp}>
        <PaymentHeaderHelp>Ajuda</PaymentHeaderHelp>
      </PaymentHeaderHelpContainer>
    </PaymentHeaderContainer>
  )
}
