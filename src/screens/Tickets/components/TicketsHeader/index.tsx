import { Icon } from '@components/Icon'
import {
  TicketsHeaderContainer,
  TicketsHeaderHelp,
  TicketsHeaderRollback,
  TicketsHeaderSubtitle,
} from './styles'

export const TicketsHeader = () => {
  return (
    <TicketsHeaderContainer>
      <TicketsHeaderRollback>
        <Icon color="BLACK" name="ArrowArcLeft" size={16} />{' '}
      </TicketsHeaderRollback>
      <TicketsHeaderSubtitle>Cupons</TicketsHeaderSubtitle>
      <TicketsHeaderHelp>Ajuda</TicketsHeaderHelp>
    </TicketsHeaderContainer>
  )
}
