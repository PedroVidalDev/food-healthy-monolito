import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  SupportHeaderContainer,
  SupportHeaderHelp,
  SupportHeaderHelpContainer,
  SupportHeaderRollback,
  SupportHeaderSubtitle,
} from './styles'

export const SupportHeader = () => {
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
    <SupportHeaderContainer>
      <SupportHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </SupportHeaderRollback>
      <SupportHeaderSubtitle>Suporte</SupportHeaderSubtitle>
      <SupportHeaderHelpContainer onPress={handleGoHelp}>
        <SupportHeaderHelp></SupportHeaderHelp>
      </SupportHeaderHelpContainer>
    </SupportHeaderContainer>
  )
}
