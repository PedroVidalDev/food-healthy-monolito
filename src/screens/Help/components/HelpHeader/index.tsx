import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  HelpHeaderContainer,
  HelpHeaderHelp,
  HelpHeaderRollback,
  HelpHeaderSubtitle,
} from './styles'

export const HelpHeader = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>()

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  return (
    <HelpHeaderContainer>
      <HelpHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />{' '}
      </HelpHeaderRollback>
      <HelpHeaderSubtitle>Ajuda</HelpHeaderSubtitle>
      <HelpHeaderHelp>Fechar</HelpHeaderHelp>
    </HelpHeaderContainer>
  )
}
