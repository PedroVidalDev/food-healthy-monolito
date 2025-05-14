import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { Ticket } from './components/CartTicket'
import { ItemList } from './components/CartItemList'
import { CartHeader } from './components/CartHeader'
import { SaleValues } from './components/CartSaleValues'

import { AppNavigationRoutesProps } from '@routes/types'

import { CartContainer, Separator } from './styles'

export const Cart = ({ route }) => {
  const insents = useSafeAreaInsets()

  const { ticketId } = route.params || {}

  const navigate = useNavigation<AppNavigationRoutesProps>()

  const handleGoToPayment = () => {
    navigate.navigate('payment')
  }

  return (
    <CartContainer statusBarHeight={insents.top}>
      <CartHeader />
      <ItemList />
      <Separator />
      <Ticket ticketId={ticketId} />
      <Separator />
      <SaleValues />
      <Button
        text="Confirmar"
        backgroundColor="PRIMARY"
        onPress={handleGoToPayment}
      />
    </CartContainer>
  )
}
