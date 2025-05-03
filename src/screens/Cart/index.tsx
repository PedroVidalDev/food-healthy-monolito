import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ItemList } from './components/CartItemList'
import { CartHeader } from './components/CartHeader'
import { Button } from '@components/Button'
import { Ticket } from './components/CartTicket'
import { SaleValues } from './components/CartSaleValues'

import { AppNavigationRoutesProps } from '@routes/types'

import { CartContainer, Separator } from './styles'

export const Cart = () => {
  const insents = useSafeAreaInsets()

  const navigate = useNavigation<AppNavigationRoutesProps>()

  const handleGoToPayment = () => {
    navigate.navigate('payment')
  }

  return (
    <CartContainer statusBarHeight={insents.top}>
      <CartHeader />
      <ItemList />
      <Separator />
      <Ticket />
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
