import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  CartHeaderContainer,
  CartHeaderHelp,
  CartHeaderRollback,
  CartHeaderSubtitle,
} from './styles'

export const CartHeader = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>()

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  return (
    <CartHeaderContainer>
      <CartHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />{' '}
      </CartHeaderRollback>
      <CartHeaderSubtitle>Carrinho</CartHeaderSubtitle>
      <CartHeaderHelp>Limpar</CartHeaderHelp>
    </CartHeaderContainer>
  )
}
