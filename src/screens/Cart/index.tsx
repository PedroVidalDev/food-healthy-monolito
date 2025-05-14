import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { CartTicket } from './components/CartTicket'
import { CartItemList } from './components/CartItemList'
import { CartHeader } from './components/CartHeader'
import { CartSaleValues } from './components/CartSaleValues'

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
