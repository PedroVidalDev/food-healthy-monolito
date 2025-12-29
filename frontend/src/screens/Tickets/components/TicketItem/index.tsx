import { useAppNavigation } from '@hooks/useAppNavigation'

import { Icon } from '@components/Icon'

import { TicketItemProps } from './types'

import {
  DescriptionSpan,
  TicketDescriptionContainer,
  TicketItemContainer,
  TicketItemDescription,
  TicketItemIconContainer,
  TicketItemTitle,
} from './styles'

export const TicketItem = (props: TicketItemProps) => {
  const { id, title, value } = props

  const { navigate } = useAppNavigation()

  const handleTicketClick = (id: number) => {
    navigate('bottomTabs', {
      screen: 'cart',
      params: { ticketId: id },
    })
  }

  return (
    <TicketItemContainer
      key={id}
      onPress={() => {
        handleTicketClick(id)
      }}
    >
      <TicketItemIconContainer>
        <Icon name="FolderOpen" size={32} color="BLACK" />
      </TicketItemIconContainer>
      <TicketDescriptionContainer>
        <TicketItemTitle numberOfLines={1} ellipsizeMode="tail">
          {title}
        </TicketItemTitle>
        <TicketItemDescription>
          Até <DescriptionSpan>R$ {value}</DescriptionSpan> de redução!
        </TicketItemDescription>
      </TicketDescriptionContainer>
    </TicketItemContainer>
  )
}
