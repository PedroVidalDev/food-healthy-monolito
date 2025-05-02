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

  return (
    <TicketItemContainer key={id}>
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
