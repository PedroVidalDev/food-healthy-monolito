import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  AppRulesHeaderContainer,
  AppRulesHeaderHelp,
  AppRulesHeaderHelpContainer,
  AppRulesHeaderRollback,
  AppRulesHeaderSubtitle,
} from './styles'

export const AppRulesHeader = () => {
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
    <AppRulesHeaderContainer>
      <AppRulesHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </AppRulesHeaderRollback>
      <AppRulesHeaderSubtitle>Sobre nós</AppRulesHeaderSubtitle>
      <AppRulesHeaderHelpContainer onPress={handleGoHelp}>
        <AppRulesHeaderHelp>Ajuda</AppRulesHeaderHelp>
      </AppRulesHeaderHelpContainer>
    </AppRulesHeaderContainer>
  )
}
