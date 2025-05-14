import { useEffect } from 'react'

import { Icon } from '@components/Icon'

import { useTickets } from '@hooks/useTickets'
import { useAppNavigation } from '@hooks/useAppNavigation'

import { CartTicketProps } from './types'

import {
  TicketContainer,
  TicketLeftSide,
  TicketLeftSideText,
  TicketLeftSideTextSubtitle,
  TicketLeftSideTextTitle,
  TicketRightSideText,
  TicketTicketRightSide,
} from './styles'

export const CartTicket = (props: CartTicketProps) => {
  const { ticketId } = props

  const { fetchGetAllTickets, fetchGetOneTicket, tickets, ticket } =
    useTickets()

  const { handleNavigation } = useAppNavigation()

  useEffect(() => {
    fetchGetOneTicket(ticketId)
    fetchGetAllTickets()
  }, [fetchGetAllTickets, fetchGetOneTicket, ticketId])

  return (
    <TicketContainer>
      <TicketLeftSide>
        <Icon name="Ticket" size={48} color="BLACK" />
        <TicketLeftSideText>
          <TicketLeftSideTextTitle>
            {ticket ? ticket.name : 'Cupom'}
          </TicketLeftSideTextTitle>
          <TicketLeftSideTextSubtitle>
            {ticket ? ticket.description : tickets ? tickets.length : 'X'}{' '}
            disponíveis
          </TicketLeftSideTextSubtitle>
        </TicketLeftSideText>
      </TicketLeftSide>
      <TicketTicketRightSide onPress={() => handleNavigation('tickets')}>
        <TicketRightSideText>
          {ticket ? 'Trocar' : 'Adicionar'}
        </TicketRightSideText>
      </TicketTicketRightSide>
    </TicketContainer>
  )
}
