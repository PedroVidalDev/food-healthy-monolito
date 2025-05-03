import { useNavigation } from '@react-navigation/native'

import { Icon } from '@components/Icon'

import { AppNavigationRoutesProps } from '@routes/types'

import {
  TicketContainer,
  TicketLeftSide,
  TicketLeftSideText,
  TicketLeftSideTextSubtitle,
  TicketLeftSideTextTitle,
  TicketRightSideText,
  TicketTicketRightSide,
} from './styles'

export const Ticket = () => {
  const navigate = useNavigation<AppNavigationRoutesProps>()

  const handleTickets = () => {
    navigate.navigate('tickets')
  }

  return (
    <TicketContainer>
      <TicketLeftSide>
        <Icon name="Ticket" size={48} color="BLACK" />
        <TicketLeftSideText>
          <TicketLeftSideTextTitle>Cupom</TicketLeftSideTextTitle>
          <TicketLeftSideTextSubtitle>3 disponíveis</TicketLeftSideTextSubtitle>
        </TicketLeftSideText>
      </TicketLeftSide>
      <TicketTicketRightSide onPress={handleTickets}>
        <TicketRightSideText>Adicionar</TicketRightSideText>
      </TicketTicketRightSide>
    </TicketContainer>
  )
}
