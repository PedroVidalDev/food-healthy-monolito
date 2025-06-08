import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ticketMock } from '@constants/mocks'

import { TicketItem } from './components/TicketItem'
import { TicketsHeader } from './components/TicketsHeader'

import {
  TicketsContainer,
  TicketsEmptyError,
  TicketsListContainer,
} from './styles'

export const Tickets = () => {
  const insents = useSafeAreaInsets()

  return (
    <TicketsContainer statusBarHeight={insents.top}>
      <TicketsHeader />

      <TicketsListContainer>
        {ticketMock.length > 0 ? (
          ticketMock.map((ticket) => {
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
