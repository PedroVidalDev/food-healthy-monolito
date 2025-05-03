import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ItemList } from './components/ItemList'
import { CartHeader } from './components/CartHeader'

import { CartContainer, Separator } from './styles'
import { Ticket } from './components/Ticket'
import { SaleValues } from './components/SaleValues'
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
