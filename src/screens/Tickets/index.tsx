import { TicketsHeader } from './components/TicketsHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TicketsContainer, TicketsListContainer } from './styles'
import { ticketItemList } from './constants'
import { TicketItem } from './components/TicketItem'

export const Tickets = () => {
  const insents = useSafeAreaInsets()

  return (
    <TicketsContainer statusBarHeight={insents.top}>
      <TicketsHeader />

      <TicketsListContainer>
        {ticketItemList.map((ticket) => {
          return (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              value={ticket.value}
            />
          )
        })}
      </TicketsListContainer>
    </TicketsContainer>
  )
}
