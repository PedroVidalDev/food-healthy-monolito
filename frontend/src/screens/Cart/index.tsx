import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { CartTicket } from './components/CartTicket'
import { CartItemList } from './components/CartItemList'
import { CartHeader } from './components/CartHeader'
import { CartSaleValues } from './components/CartSaleValues'

import { useAppNavigation } from '@hooks/useAppNavigation'

import { CartContainer, Separator } from './styles'

export const Cart = ({ route }) => {
  const insents = useSafeAreaInsets()

  const { ticketId } = route.params || {}

  const { navigate } = useAppNavigation()

  const handleGoToPayment = () => {
    navigate('payment')
  }

  return (
    <CartContainer statusBarHeight={insents.top}>
      <CartHeader />
      <CartItemList />
      <Separator />
      <CartTicket ticketId={ticketId} />
      <Separator />
      <CartSaleValues />
      <Button
        text="Confirmar"
        backgroundColor="PRIMARY"
        onPress={handleGoToPayment}
      />
    </CartContainer>
  )
}
