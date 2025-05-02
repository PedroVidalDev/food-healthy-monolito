import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  TicketsHeaderContainer,
  TicketsHeaderHelp,
  TicketsHeaderRollback,
  TicketsHeaderSubtitle,
} from './styles'

export const TicketsHeader = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>()

  const handleGoBack = () => {
    navigation.navigate('home')
  }

  return (
    <TicketsHeaderContainer>
      <TicketsHeaderRollback onPress={handleGoBack}>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />{' '}
      </TicketsHeaderRollback>
      <TicketsHeaderSubtitle>Cupons</TicketsHeaderSubtitle>
      <TicketsHeaderHelp>Ajuda</TicketsHeaderHelp>
    </TicketsHeaderContainer>
  )
}
