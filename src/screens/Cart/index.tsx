import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ItemList } from './components/ItemList'
import { CartHeader } from './components/CartHeader'

import { CartContainer, Separator } from './styles'
import { Ticket } from './components/Ticket'
import { SaleValues } from './components/SaleValues'

export const Cart = () => {
  const insents = useSafeAreaInsets()

  return (
    <CartContainer statusBarHeight={insents.top}>
      <CartHeader />
      <ItemList />
      <Separator />
      <Ticket />
      <Separator />
      <SaleValues />
    </CartContainer>
  )
}
