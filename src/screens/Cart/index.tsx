import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ItemList } from './components/CartItemList'
import { CartHeader } from './components/CartHeader'

import { CartContainer, Separator } from './styles'
import { Ticket } from './components/CartTicket'
import { SaleValues } from './components/CartSaleValues'
import { Button } from '@components/Button'

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
      <Button text="Confirmar" backgroundColor="PRIMARY" />
    </CartContainer>
  )
}
