import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  ProductHeaderContainer,
  ProductHeaderHelp,
  ProductHeaderHelpContainer,
  ProductHeaderRollback,
  ProductHeaderSubtitle,
} from './styles'

export const ProductHeader = () => {
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
    <ProductHeaderContainer>
      <ProductHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </ProductHeaderRollback>
      <ProductHeaderSubtitle>Produto</ProductHeaderSubtitle>
      <ProductHeaderHelpContainer onPress={handleGoHelp}>
        <ProductHeaderHelp>Ajuda</ProductHeaderHelp>
      </ProductHeaderHelpContainer>
    </ProductHeaderContainer>
  )
}
