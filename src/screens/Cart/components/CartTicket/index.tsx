import { useEffect, useState } from 'react'

import { ticketMock } from '@constants/mocks'

import { TicketDTO } from '@dtos/TicketDTO'

import { Icon } from '@components/Icon'

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

  const [ticket, setTicket] = useState<TicketDTO>()

  const { handleNavigation } = useAppNavigation()

  useEffect(() => {
    setTicket(ticketMock.find((t) => t.id === ticketId))
  }, [ticketId])

  return (
    <TicketContainer>
      <TicketLeftSide>
        <Icon name="Ticket" size={48} color="BLACK" />
        <TicketLeftSideText>
          <TicketLeftSideTextTitle>
            {ticket ? ticket.name : 'Cupom'}
          </TicketLeftSideTextTitle>
          <TicketLeftSideTextSubtitle>
            {ticket
              ? ticket.description
              : (ticketMock ? ticketMock.length : 'X') +
                ' cupom(s) disponível(is)'}
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
