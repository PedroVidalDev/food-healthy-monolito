import { ItemProps } from './types'

import {
  ItemContainer,
  ItemImageContainer,
  ItemInfoContainer,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemQuantityButton,
  ItemQuantityContainer,
} from './styles'
import { Icon } from '@components/Icon'

export const Item = (props: ItemProps) => {
  const { id, name, price, quantity } = props

  return (
    <ItemContainer key={id}>
      <ItemImageContainer>
        <Icon name="Coffee" size={42} color="BLACK" />
      </ItemImageContainer>
      <ItemInfoContainer>
        <ItemName numberOfLines={1} ellipsizeMode="tail">
          {name}
        </ItemName>
        <ItemPrice>R$ {price}</ItemPrice>
      </ItemInfoContainer>
      <ItemQuantityContainer>
        <ItemQuantityButton>
          <Icon name="Minus" size={16} color="BLACK" />
        </ItemQuantityButton>
        <ItemQuantity>{quantity}</ItemQuantity>
        <ItemQuantityButton>
          <Icon name="Plus" size={16} color="PRIMARY_DARK" />
        </ItemQuantityButton>
      </ItemQuantityContainer>
    </ItemContainer>
  )
}
