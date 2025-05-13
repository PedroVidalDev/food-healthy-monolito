import { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TicketItem } from './components/TicketItem'
import { TicketsHeader } from './components/TicketsHeader'

import { useTickets } from '@hooks/useTickets'

import {
  TicketsContainer,
  TicketsEmptyError,
  TicketsListContainer,
} from './styles'

export const Tickets = () => {
  const insents = useSafeAreaInsets()

  const { fetchGetAllTickets, tickets } = useTickets()

  useEffect(() => {
    fetchGetAllTickets()
  }, [fetchGetAllTickets])

  return (
    <TicketsContainer statusBarHeight={insents.top}>
      <TicketsHeader />

      <TicketsListContainer>
        {tickets.length > 0 ? (
          tickets.map((ticket) => {
            return (
              <TicketItem
                key={ticket.id}
                id={ticket.id}
                title={ticket.name}
                value={ticket.value}
              />
            )
          })
        ) : (
          <TicketsEmptyError> Nenhum cupom disponível </TicketsEmptyError>
        )}
      </TicketsListContainer>
    </TicketsContainer>
  )
}
