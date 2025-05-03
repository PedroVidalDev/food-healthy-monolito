import { Item } from './components/Item'

import { itemList } from './constants'

import { ItemListContainer } from './styles'

export const ItemList = () => {
  return (
    <ItemListContainer>
      {itemList.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </ItemListContainer>
  )
}
