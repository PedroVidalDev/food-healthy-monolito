import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  TicketsHeaderContainer,
  TicketsHeaderHelp,
  TicketsHeaderHelpContainer,
  TicketsHeaderRollback,
  TicketsHeaderSubtitle,
} from './styles'

export const TicketsHeader = () => {
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
    <TicketsHeaderContainer>
      <TicketsHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />
      </TicketsHeaderRollback>
      <TicketsHeaderSubtitle>Cupons</TicketsHeaderSubtitle>
      <TicketsHeaderHelpContainer onPress={handleGoHelp}>
        <TicketsHeaderHelp>Ajuda</TicketsHeaderHelp>
      </TicketsHeaderHelpContainer>
    </TicketsHeaderContainer>
  )
}
