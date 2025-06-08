import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  AboutUsHeaderContainer,
  AboutUsHeaderHelp,
  AboutUsHeaderHelpContainer,
  AboutUsHeaderRollback,
  AboutUsHeaderSubtitle,
} from './styles'

export const AboutUsHeader = () => {
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
    <AboutUsHeaderContainer>
      <AboutUsHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </AboutUsHeaderRollback>
      <AboutUsHeaderSubtitle>Sobre nós</AboutUsHeaderSubtitle>
      <AboutUsHeaderHelpContainer onPress={handleGoHelp}>
        <AboutUsHeaderHelp>Ajuda</AboutUsHeaderHelp>
      </AboutUsHeaderHelpContainer>
    </AboutUsHeaderContainer>
  )
}
