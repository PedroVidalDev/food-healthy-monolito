import { Icon } from '@components/Icon'

import {
  TicketContainer,
  TicketLeftSide,
  TicketLeftSideText,
  TicketLeftSideTextSubtitle,
  TicketLeftSideTextTitle,
  TicketRightSideText,
  TicketTicketRightSide,
} from './styles'
import { useAppNavigation } from '@hooks/useAppNavigation'

export const Ticket = () => {
  const { handleNavigation } = useAppNavigation()

  return (
    <TicketContainer>
      <TicketLeftSide>
        <Icon name="Ticket" size={48} color="BLACK" />
        <TicketLeftSideText>
          <TicketLeftSideTextTitle>Cupom</TicketLeftSideTextTitle>
          <TicketLeftSideTextSubtitle>3 disponíveis</TicketLeftSideTextSubtitle>
        </TicketLeftSideText>
      </TicketLeftSide>
      <TicketTicketRightSide onPress={() => handleNavigation('tickets')}>
        <TicketRightSideText>Adicionar</TicketRightSideText>
      </TicketTicketRightSide>
    </TicketContainer>
  )
}
